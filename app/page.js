import FeaturesSection from "@/components/Features-Section";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HeroSection from "@/components/Hero-Section";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <Footer></Footer>
    </>
  );
}
