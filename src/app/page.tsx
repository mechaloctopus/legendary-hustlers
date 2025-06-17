import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import AboutSection from '@/components/sections/AboutSection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SkipLink from '@/components/ui/SkipLink';
import LazySection from '@/components/ui/LazySection';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <LazySection>
          <ServicesSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
        <LazySection>
          <AboutSection />
        </LazySection>
      </main>
      <ScrollToTop />
    </>
  );
}
