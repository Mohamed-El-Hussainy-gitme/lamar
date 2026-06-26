import Navbar from '@/components/public/Navbar';
import HeroSection from '@/components/public/HeroSection';
import ReviewBadges from '@/components/public/ReviewBadges';
import AboutSection from '@/components/public/AboutSection';
import ServicesSection from '@/components/public/ServicesSection';
import ProjectsSlider from '@/components/public/ProjectsSlider';
import PopularServicesSection from '@/components/public/PopularServicesSection';
import InlineQuoteSection from '@/components/public/InlineQuoteSection';
import WorkAreasSection from '@/components/public/WorkAreasSection';
import VisionSection from '@/components/public/VisionSection';
import ProcessSection from '@/components/public/ProcessSection';
import BenefitsSection from '@/components/public/BenefitsSection';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import FAQSection from '@/components/public/FAQSection';
import ContactSection from '@/components/public/ContactSection';
import Footer from '@/components/public/Footer';
import RevealObserver from '@/components/public/RevealObserver';
import { t } from '@/lib/i18n';
import { getSiteText } from '@/lib/siteText';

export const revalidate = 3600;

export default async function Home() {
  const lang = 'nl' as const;
  const tx = await getSiteText();
  const faqItems = t.nl.faq.items.map((_, i) => ({
    q: tx(`home_faq_q${i + 1}`),
    a: tx(`home_faq_a${i + 1}`),
  }));
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <HeroSection lang={lang} />
        <ReviewBadges />
        <AboutSection lang={lang} />
        <ServicesSection lang={lang} />
        <PopularServicesSection lang={lang} />
        <ProjectsSlider lang={lang} />
        <VisionSection lang={lang} />
        <ProcessSection lang={lang} />
        <BenefitsSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <FAQSection
          lang={lang}
          heading={tx('home_faq_heading')}
          items={faqItems}
        />
        <InlineQuoteSection />
        <WorkAreasSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <RevealObserver />
    </>
  );
}
