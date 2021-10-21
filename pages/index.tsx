import type { NextPage } from "next";
import dynamic from "next/dynamic";
import AboutSection from "../components/AboutSection";
import ContactBanner from "../components/ContactBanner";

const HeroWithNoSSR = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <HeroWithNoSSR />
      <AboutSection />
      <ContactBanner />
    </div>
  );
};

export default Home;
