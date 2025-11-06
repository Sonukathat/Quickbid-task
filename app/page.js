import ClientSection from "./components/ClientSection";
import CompaniesSection from "./components/CompaniesSection";
import Footer from "./components/Footer";
import FutureSection from "./components/FutureSection";
import GetAns from "./components/GetAns";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import PricingSection from "./components/PricingSection";
import StreamlineSection from "./components/StreamlineSection";
import TalkWithAI from "./components/TalkWithAI";
import TextGenerate from "./components/TextGenerate";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <StreamlineSection/>
      <CompaniesSection/>
      <TextGenerate/>
      <ClientSection/>
      <FutureSection/>
      <PricingSection/>
      <GetAns/>
      <NewsSection/>
      <TalkWithAI/>
      <Footer/>
    </>
  );
}
