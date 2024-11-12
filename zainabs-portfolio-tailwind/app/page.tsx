import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollUp from "@/components/scroll-up";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 text-purple-950 font-serif">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollUp />
    </main>
  );
}
