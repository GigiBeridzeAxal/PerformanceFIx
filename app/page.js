"use client";

import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Loading from "./loading";
import { useEffect, useState } from "react";

const Promo = dynamic(() => import("./components/Promo"));
const Slider = dynamic(() => import("./components/Slider"));
const CountWrapper = dynamic(() => import("./components/CountWrapper"));
const Catalog = dynamic(() => import("./components/Catalog"));
const Posts = dynamic(() => import("./components/Posts"));
const PlaceLoc = dynamic(() => import("./components/PlaceLoc"));
const GroupWrapper = dynamic(() => import("./components/GroupWrapper"));
const FormWrapper = dynamic(() => import("./components/FormWrapper"));
const Footer = dynamic(() => import("./components/Footer"));
const ContactOut = dynamic(() => import("./components/ContactOut"));

export default function Home() {
  const [offloading, setOffLoading] = useState(false);

  useEffect(() => {
    setOffLoading(false);
    setTimeout(() => setOffLoading(true), 1000);
  }, []);

  return (
    <main>
      <Loading done={offloading} />
      <Header />
      <HeroSection />
      <Promo />
      <Slider />
      <CountWrapper />
      <Posts />
      <Catalog />
      <PlaceLoc />
      <GroupWrapper />
      <FormWrapper />
      <Footer />
      <ContactOut />
      <ToastContainer />
    </main>
  );
}