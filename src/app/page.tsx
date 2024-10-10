import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Body/>
      <Footer />
    </>
  );
}
