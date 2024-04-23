import Navbar from "./components/pages/home/Navbar/Navbar";
import HeroSection from "./components/pages/home/HeroSection/HeroSection";
import AboutSection from "./components/pages/home/AboutSection/AboutSection";
import SkillsSection from "./components/pages/home/SkillsSection/SkillsSection";
import TextsSection from "./components/pages/home/TextsSection/TextsSection";
import ChroniclesSection from "./components/pages/home/ChroniclesSection/ChroniclesSection";
import ChroniclesData from "./components/pages/home/ChroniclesSection/data/ChroniclesData";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TextsSection />
      {ChroniclesData.map((data, index) => (
        <ChroniclesSection key={index} data={data} />
      ))}
    </>
  );
};

export default App;
