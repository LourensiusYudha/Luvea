import { testimonials } from '@/data/testimonials';
import { FEATURES } from '@/data/links';
import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import ProblemAwareness from '@/components/sections/ProblemAwareness';
import Testimonials from '@/components/sections/Testimonials';
import ProductsSection from '@/components/sections/ProductsSection';
import SizeGuide from '@/components/sections/SizeGuide';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Advantages from '@/components/sections/Advantages';
import BannerStrip from '@/components/sections/BannerStrip';
import FinalCta from '@/components/sections/FinalCta';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/sections/Footer';
import StickyCta from '@/components/sections/StickyCta';
import SocialProofPopup from '@/components/ui/SocialProofPopup';
import WaFloat from '@/components/ui/WaFloat';
import Reveal from '@/components/ui/Reveal';

export default function Home() {
  return (
    <>
      <BannerStrip />
      <Nav />
      <Hero />
      <Reveal><ProblemAwareness /></Reveal>
      <Reveal><ProductsSection /></Reveal>
      <Reveal><SizeGuide /></Reveal>
      <Reveal><Advantages /></Reveal>
      <Reveal><ComparisonTable /></Reveal>
      <Reveal><Testimonials testimonials={testimonials} /></Reveal>
      <Reveal><FinalCta /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Footer />
      <StickyCta />
      <WaFloat />
      {FEATURES.socialProofPopup && <SocialProofPopup />}
    </>
  );
}
