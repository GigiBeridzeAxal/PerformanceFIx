"use client";
import { createContext, useContext } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error from "../error";
import Loading from "../loading";

const DataContext = createContext(null);
export const useData = () => useContext(DataContext);

const queryClient = new QueryClient();

const fetchSiteData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POST_URL}/api/details/${process.env.NEXT_PUBLIC_SITE_ID}`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

const DataProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["siteData"],
    queryFn: fetchSiteData,
    staleTime: 1000 * 60 * 5, 
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <DataContext.Provider value={data}>{children}</DataContext.Provider>
  );
};

export default function Provider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>{children}</DataProvider>
    </QueryClientProvider>
  );
}
