import type { Metadata } from 'next'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import OfferteForm from '@/components/public/OfferteForm'

export const metadata: Metadata = {
  title: 'Offerte aanvragen | LAMAR Stukadoor en Onderhoud',
  description: 'Vraag eenvoudig en vrijblijvend een offerte aan bij LAMAR Stukadoor en Onderhoud — stucwerk, schilderwerk en renovatie. Binnen 1 werkdag reactie.',
}

export default function OffertePage() {
  const lang = 'nl' as const
  return (
    <>
      <Navbar lang={lang} />
      <OfferteForm />
      <Footer lang={lang} />
    </>
  )
}
