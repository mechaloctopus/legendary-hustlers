import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <AboutSection />
    </main>
  );
}
