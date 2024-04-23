import Navbar from "./components/pages/home/Navbar/Navbar";
import HeroSection from "./components/pages/home/HeroSection/HeroSection";
import AboutSection from "./components/pages/home/AboutSection/AboutSection";
import SkillsSection from "./components/pages/home/SkillsSection/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
};

export default App;
