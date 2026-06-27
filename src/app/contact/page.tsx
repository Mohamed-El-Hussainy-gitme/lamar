import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import RevealObserver from '@/components/public/RevealObserver'
import PageHeader from '@/components/public/PageHeader'
import ContactPageSection from '@/components/public/ContactPageSection'
import TestimonialsSection from '@/components/public/TestimonialsSection'

export const revalidate = 3600

export const metadata = {
  title: 'Contact | LAMAR Stukadoor en Onderhoud',
  description: 'Neem contact op met LAMAR Stukadoor en Onderhoud voor stucwerk, interieurafwerking en renovatie. Stuur ons een bericht of bel direct.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const lang = 'nl' as const
  return (
    <>
      <Navbar lang={lang} />

      <PageHeader
        title="CONTACT"
        bgImage="/images/image23.jpeg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <main>
        <ContactPageSection lang={lang} />

        <TestimonialsSection
          lang={lang}
          headingA="Dit vinden klanten van ons"
          headingAccent="contact"
          headingB="over heel Nederland"
          sub="Wij doen meer dan muren afwerken — wij bouwen vertrouwen. Dat hoort u terug bij onze klanten door heel Nederland."
        />
      </main>

      <Footer lang={lang} />
      <RevealObserver />
    </>
  )
}
