import { Hero } from '@/components/hero';
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
      <WorkSection />
      <Approach />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
