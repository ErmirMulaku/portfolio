import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { WorkSection } from '@/components/work-section';
import { Approach } from '@/components/approach';
import { Skills } from '@/components/skills';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkSection />
      <Approach />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
