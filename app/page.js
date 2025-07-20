import FeaturesSection from "@/components/Features-Section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-Section";
import ImageGallery from "@/components/Image-gallery";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <ImageGallery></ImageGallery>
      <Footer></Footer>
    </>
  );
}
