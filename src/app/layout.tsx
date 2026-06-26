import type { Metadata, Viewport } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import './globals.css'
import FloatingWhatsApp from '@/components/public/FloatingWhatsApp'
import { getContent } from '@/lib/content'
import { getTheme } from '@/lib/themeServer'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from '@/lib/site'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo', // Reusing the variable name to minimize changes across components
})

export const revalidate = 3600

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  icons: {
    icon: '/lamar_icon.svg',
    shortcut: '/lamar_icon.svg',
  },
  title: {
    default: 'LAMAR Stukadoor en Onderhoud | Gipswerk, Decoratie & Renovatie',
    template: '%s | LAMAR Stukadoor en Onderhoud',
  },
  description: SITE_DESCRIPTION,
  keywords: 'stukadoor, gipswerk, interieurafwerking, schilderwerk, woningrenovatie, decoratie, Nederland, LAMAR',
  openGraph: {
    title: SITE_NAME,
    description: 'Professioneel stukadoorswerk, interieurafwerking en woningrenovatie in Nederland.',
    type: 'website',
    locale: 'nl_NL',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Professioneel stukadoorswerk, interieurafwerking en woningrenovatie in Nederland.',
  },
  robots: { index: true, follow: true },
}

import Preloader from '@/components/public/Preloader'

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const wa = await getContent('whatsapp_number', '31684054528')
  // We can fetch theme, but we will enforce our new elegant palette by default
  const theme = await getTheme()
  const primaryColor = theme.primary === '#1A1A1A' || theme.primary === '#000000' ? '#1A1C20' : theme.primary;
  const accentColor = theme.accent === '#FFD935' || theme.accent === '#2ABFA8' ? '#D4AF37' : theme.accent; // Enforce gold if it was yellow or green

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': absoluteUrl('/#business'),
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl('/opengraph-image'),
    telephone: `+${wa}`,
    areaServed: { '@type': 'Country', name: 'Netherlands' },
    address: { '@type': 'PostalAddress', addressCountry: 'NL' },
    knowsAbout: ['Stucwerk', 'Gipswerk', 'Interieurafwerking', 'Schilderwerk', 'Woningrenovatie'],
  }

  return (
    <html
      lang="nl"
      className={`${outfit.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      style={{
        '--teal': primaryColor,
        '--teal2': accentColor,
      } as React.CSSProperties}
    >
      <body>
        <Preloader />
        {children}
        <FloatingWhatsApp number={wa} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
