import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsList from "@/components/ProjectsList";
import EducationList from "@/components/EducationList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ExperienceTimeline />
      <SkillsGrid />
      <ProjectsList />
      <EducationList />
      <ContactSection />
      <Footer />
    </main>
  );
}
