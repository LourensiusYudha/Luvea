import dynamic from 'next/dynamic';
import { testimonials } from '@/data/testimonials';
import { FEATURES } from '@/data/links';
import Nav from '@/components/layout/Nav';
import Hero from '@/components/sections/Hero';
import BannerStrip from '@/components/sections/BannerStrip';
import Footer from '@/components/sections/Footer';
import ScrollRevealWrapper from '@/components/ui/ScrollRevealWrapper';

const ProblemAwareness = dynamic(() => import('@/components/sections/ProblemAwareness'));
const ProductsSection = dynamic(() => import('@/components/sections/ProductsSection'));
const SizeGuide = dynamic(() => import('@/components/sections/SizeGuide'));
const Advantages = dynamic(() => import('@/components/sections/Advantages'));
const ComparisonTable = dynamic(() => import('@/components/sections/ComparisonTable'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const FinalCta = dynamic(() => import('@/components/sections/FinalCta'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));
const StickyCta = dynamic(() => import('@/components/sections/StickyCta'));
const WaFloat = dynamic(() => import('@/components/ui/WaFloat'));
const SocialProofPopup = dynamic(() => import('@/components/ui/SocialProofPopup'));

export default function Home() {
  return (
    <>
      <BannerStrip />
      <Nav />
      <main id="main-content">
        <ScrollRevealWrapper>
          <Hero />
          <ProblemAwareness />
          <ProductsSection />
          <SizeGuide />
          <Advantages />
          <ComparisonTable />
          <Testimonials testimonials={testimonials} />
          <FinalCta />
          <FaqSection />
        </ScrollRevealWrapper>
      </main>
      <Footer />
      <StickyCta />
      <WaFloat />
      {FEATURES.socialProofPopup && <SocialProofPopup />}
    </>
  );
}
