import { getContent, ABOUT_FALLBACK } from '@/lib/content'
import { t } from '@/lib/i18n'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import TestimonialsSection from '@/components/public/TestimonialsSection'
import ContactSection from '@/components/public/ContactSection'
import RevealObserver from '@/components/public/RevealObserver'

export const revalidate = 3600

export const metadata = {
  title: 'Over ons',
  description: 'Leer LAMAR Stukadoor en Onderhoud kennen: vakmanschap in stucwerk, afwerking en renovatie met meer dan 200 voltooide projecten in Nederland.',
  alternates: { canonical: '/over-ons' },
}

const IMG = 'https://images.pexels.com/photos/5493654/pexels-photo-5493654.jpeg?auto=compress&cs=tinysrgb&w=800&h=1150&fit=crop'

type Principle = { title: string; text: string }

function PrincipleList({ items }: { items: Principle[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {items.map((it, idx) => (
        <div key={idx} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--teal2)', flexShrink: 0, width: 32 }}>
            0{idx + 1}
          </span>
          <div>
            <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.4rem' }}>{it.title}</div>
            <div style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--white2)', fontWeight: 300 }}>{it.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function OverOnsPage() {
  const lang = 'nl' as const
  const tr = t[lang].overOns
  const aboutText = await getContent('about_text', ABOUT_FALLBACK)
  const paragraphs = aboutText.split('\n\n').filter(Boolean)

  return (
    <>
      <Navbar lang={lang} />
      <main style={{ paddingTop: 75 }}>
        <section id="over-intro" style={{ background: 'var(--bg)', padding: '6rem 3.5rem' }}>
          <div className="over-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
            <div className="rv">
              <h1 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2.4rem,4vw,3.6rem)', lineHeight: 1.1, letterSpacing: '0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
                {tr.headingA} <span style={{ color: 'var(--teal2)' }}>{tr.headingAccent}</span> {tr.headingB}
              </h1>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--white2)', fontWeight: 300, marginBottom: '1rem', maxWidth: 540 }}>{p}</p>
              ))}
              <div style={{ marginTop: '2.5rem' }}>
                <PrincipleList items={tr.principles} />
              </div>
            </div>
            <div className="over-img rv" style={{ width: '100%', height: 740, borderRadius: 28, overflow: 'hidden', border: '1px solid var(--border)', backgroundImage: `url('${IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        </section>

        <TestimonialsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <RevealObserver />
    </>
  )
}
