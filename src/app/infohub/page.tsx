import { articles } from '@/lib/infohub'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import TestimonialsSection from '@/components/public/TestimonialsSection'
import ContactSection from '@/components/public/ContactSection'
import RevealObserver from '@/components/public/RevealObserver'

export const revalidate = 3600

export const metadata = {
  title: 'Infohub',
  description: 'Praktische uitleg over stucwerk, plafonds, sausklaar afwerken en renovatie. Antwoorden op de meestgestelde vragen van LAMAR.',
  alternates: { canonical: '/infohub' },
}

const HERO_IMG = 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=1400&h=800&fit=crop'

export default function InfohubPage() {
  const lang = 'nl' as const
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <style>{`.info-card{transition:transform .2s}.info-card:hover{transform:translateY(-4px)}.info-card:hover .info-pill{background:var(--teal2)}`}</style>

        {/* Hero */}
        <section id="info-top" style={{ background: 'var(--bg)', padding: '6rem 3.5rem 0' }}>
          <div className="info-hero rv" style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', borderRadius: 28, overflow: 'hidden', minHeight: 520, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', backgroundImage: `linear-gradient(rgba(26,28,32,0.6), rgba(26,28,32,0.8)), url('${HERO_IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '4rem' }}>
            <h1 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2.4rem,3.8vw,3.6rem)', lineHeight: 1.1, letterSpacing: '0.01em', color: '#FFFFFF', margin: 0, maxWidth: 900 }}>
              Infohub: inspiratie, technieken en stucverhalen
            </h1>
            <div className="info-hero-card" style={{ marginTop: '2.5rem', maxWidth: 560, background: 'var(--bg)', borderRadius: 20, padding: '2rem 2.25rem', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--white)', marginBottom: '0.75rem' }}>Alles wat u moet weten</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--white2)', fontWeight: 300, marginBottom: '1.5rem' }}>
                Welkom in de infohub, waar inspiratie en vakmanschap samenkomen. Hier komt stucwerk tot leven door verhalen, inzichten en bewezen technieken uit de praktijk — van subtiele wandafwerking tot uitgesproken structuren.
              </p>
              <a href="#info-cards" style={{ background: 'var(--teal)', color: '#FFFFFF', padding: '0.7rem 1.6rem', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>Lees meer</a>
            </div>
          </div>
        </section>

        {/* Card grid */}
        <section id="info-cards" style={{ background: 'var(--bg)', padding: '4rem 3.5rem 6rem' }}>
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: 1200, margin: '0 auto' }}>
            {articles.map((a) => (
              <a key={a.slug} href={`/infohub/${a.slug}`} className="info-card rv" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--bg2)', padding: '1.5rem', borderRadius: 24, border: '1px solid var(--border)' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', border: '1px solid var(--border)' }}>
                  <h3 style={{ position: 'relative', fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(1.4rem,2.4vw,2rem)', lineHeight: 1.1, letterSpacing: '0.01em', textTransform: 'uppercase', color: '#FFFFFF', textAlign: 'center', margin: 0 }}>{a.title}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '0.5rem 0.5rem 0' }}>
                  <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--white)' }}>{a.title}</span>
                  <span className="info-pill" style={{ background: 'var(--teal2)', color: 'var(--teal)', padding: '0.5rem 1.25rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap', transition: 'background 0.2s' }}>Lees meer</span>
                </div>
              </a>
            ))}
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
