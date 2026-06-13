'use client';

import { testimonials } from '@/data/testimonials';
import { useCarousel } from '@/hooks/useCarousel';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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

export default function Home() {
  const { trackRef, currentIndex, goTo } = useCarousel(testimonials.length, 2000);
  const revealRef = useScrollReveal();

  return (
    <>
      <BannerStrip />
      <Nav />
      <div ref={revealRef}>
        <Hero />
        <ProblemAwareness />
        <ProductsSection />
        <Testimonials
          testimonials={testimonials}
          currentIndex={currentIndex}
          trackRef={trackRef}
          goTo={goTo}
        />
        <SizeGuide />
        <Advantages />
        <ComparisonTable />
        <FinalCta />
        <FaqSection />
      </div>
      <Footer />
      <StickyCta />
      <WaFloat />
      <SocialProofPopup />
    </>
  );
}
