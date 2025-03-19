"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const CategoryLink = ({ setFn, setSearch }) => {
  const { slug } = useParams();
  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POST_URL}/api/category/site/${process.env.NEXT_PUBLIC_SITE_ID}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching category:", error);
      return [];
    }
  };

  const handleCategory = (id) => {
    setFn(id);
    setSearch("");
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-4 text-center text-sm">
      {/* {!slug && (
        <button
          onClick={() => handleCategory(null)}
          className="rounded m-2"
        >
          <span className="bg-[#c8d3de] hover:bg-[#ffd966] duration-200 px-3 py-1 text-[#00359f]">
            All
          </span>
        </button>
      )} */}

      {data.map((cat, index) => {
        return (
          <button
            onClick={() => handleCategory(cat.cat_id)}
            className="rounded m-2"
            key={index}
          >
            <span className="bg-[#c8d3de] hover:bg-[#ffd966] duration-200 px-3 py-1 text-[#00359f]">
              {cat.cat_name}
            </span>
            <span className="bg-[#00359f] px-2 py-1 text-white">
              ({cat.post_count})
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryLink;
