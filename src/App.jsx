import Navbar from "./components/pages/home/Navbar/Navbar";
import HeroSection from "./components/pages/home/HeroSection/HeroSection";
import AboutSection from "./components/pages/home/AboutSection/AboutSection";
import SkillsSection from "./components/pages/home/SkillsSection/SkillsSection";
import TextsSection from "./components/pages/home/TextsSection/TextsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TextsSection />
    </>
  );
};

export default App;
