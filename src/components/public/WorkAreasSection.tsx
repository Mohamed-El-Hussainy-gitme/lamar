import { type Lang } from '@/lib/i18n'
import Link from 'next/link'

const USPs = [
  'Snel en efficiënt, ZONDER wachttijden!',
  'Zowel grote, als kleine klussen.',
  '1 op 1 begeleiding gedurende het hele traject.'
]

const CITIES = [
  'Amsterdam',
  'Utrecht',
  'Haarlem',
  'Almere',
  'Amersfoort',
  'Alkmaar',
  'Amstelveen',
  'Hilversum'
]

export default function WorkAreasSection({ lang }: { lang: Lang }) {
  return (
    <section style={{ padding: '6rem 3.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="rv" style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {USPs.map((usp, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg)', padding: '1.5rem', borderRadius: 16, border: '1px solid var(--border)' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--teal2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--bg)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--white)', fontWeight: 600, lineHeight: 1.4 }}>
                {usp}
              </div>
            </div>
          ))}
        </div>

        {/* Work Areas */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '3rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ display: 'block', width: '1.5rem', height: 1, background: 'var(--teal2)', flexShrink: 0 }} />
              Onze Regio
            </div>
            <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3vw,3rem)', lineHeight: 1.1, color: 'var(--white)', marginBottom: '1.5rem', marginTop: 0 }}>
              Werkgebieden
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--white2)', fontWeight: 300, maxWidth: 500 }}>
              Wij zijn voornamelijk actief in de Randstad en omstreken. Staat uw woonplaats er niet tussen? Neem contact op, we bespreken graag de mogelijkheden.
            </p>
          </div>

          <div style={{ flex: '1 1 500px', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {CITIES.map((city) => (
              <div key={city} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '0.75rem 1.5rem', borderRadius: 999, fontSize: '0.95rem', color: 'var(--white)', fontWeight: 300, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {city}
              </div>
            ))}
            <Link href="/contact" style={{ background: 'transparent', border: '1px dashed var(--border2)', padding: '0.75rem 1.5rem', borderRadius: 999, fontSize: '0.95rem', color: 'var(--teal2)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'borderColor 0.2s' }}>
              Alle werkgebieden →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
