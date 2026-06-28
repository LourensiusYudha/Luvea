import { testimonials } from '@/data/testimonials';
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
import ScrollRevealWrapper from '@/components/ui/ScrollRevealWrapper';

export default function Home() {
  return (
    <>
      <BannerStrip />
      <Nav />
      <ScrollRevealWrapper>
        <Hero />
        <ProblemAwareness />
        <ProductsSection />
        <Testimonials testimonials={testimonials} />
        <SizeGuide />
        <Advantages />
        <ComparisonTable />
        <FinalCta />
        <FaqSection />
      </ScrollRevealWrapper>
      <Footer />
      <StickyCta />
      <WaFloat />
      <SocialProofPopup />
    </>
  );
}
