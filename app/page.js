import Navbar from "./conmponent/Navbar";
import Footer from "./conmponent/Footer";
import HeroSection from "./conmponent/HeroSection";
import AboutSection from "./conmponent/AboutSection";
import SkillsSection from "./conmponent/SkillsSection";
import ProjectsSection from "./conmponent/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
