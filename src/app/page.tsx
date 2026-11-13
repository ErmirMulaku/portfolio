import { Hero } from '@/components/hero';
import { WorkSection } from '@/components/work-section';
import { Approach } from '@/components/approach';
import { Experience } from '@/components/experience';
import { SkillsSection } from '@/components/skills/skills-section';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <Approach />
      <Experience />
      <SkillsSection />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
