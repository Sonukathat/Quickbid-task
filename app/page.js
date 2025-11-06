import ClientSection from "./components/ClientSection";
import CompaniesSection from "./components/CompaniesSection";
import FutureSection from "./components/FutureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StreamlineSection from "./components/StreamlineSection";
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
    </>
  );
}
