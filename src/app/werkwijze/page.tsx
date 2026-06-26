import type { Metadata } from 'next'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import WerkwijzeIntro from '@/components/public/WerkwijzeIntro'
import BenefitsSection from '@/components/public/BenefitsSection'
import TestimonialsSection from '@/components/public/TestimonialsSection'
import ContactSection from '@/components/public/ContactSection'
import RevealObserver from '@/components/public/RevealObserver'
import { getContent } from '@/lib/content'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Onze werkwijze | LAMAR Stukadoor en Onderhoud',
  description: 'Zo pakken wij het aan — van offerte tot oplevering. Helder, eerlijk en zonder omwegen.',
}

export default async function WerkwijzePage() {
  const lang = 'nl' as const
  const banner = await getContent('werkwijze_banner', 'VISIE, PRECISIE & VAKMANSCHAP')
  return (
    <>
      <Navbar lang={lang} />
      <main style={{ paddingTop: 75 }}>
        <WerkwijzeIntro />
        <BenefitsSection lang={lang} />
        <TestimonialsSection
          lang={lang}
          headingA="Meer dan"
          headingAccent="stucwerk"
          headingB="— wij bouwen vertrouwen"
          sub="Wij doen meer dan muren afwerken. Dat hoort u terug bij onze klanten door heel Nederland."
        />
        {/* VISIE banner — change the wording to whatever slogan you prefer */}
        <section style={{ background: 'var(--bg)', padding: '1rem 3.5rem 5rem' }}>
          <div className="rv ww-banner" style={{ maxWidth: 1200, margin: '0 auto', borderRadius: 28, padding: '5rem 2rem', textAlign: 'center', background: 'var(--teal)', border: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '0.01em', color: 'var(--teal2)', margin: 0 }}>
              {banner}
            </h2>
          </div>
        </section>
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <RevealObserver />
    </>
  )
}
