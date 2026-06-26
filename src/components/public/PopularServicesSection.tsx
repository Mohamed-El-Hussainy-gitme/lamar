import { type Lang } from '@/lib/i18n'
import Link from 'next/link'

const services = [
  { title: 'Stucwerk', price: 'Vanaf €16 m²', category: 'Stucwerkzaamheden', href: '/offerte-aanvragen' },
  { title: 'Dunpleister', price: 'Vanaf €12 m²', category: 'Stucwerkzaamheden', href: '/offerte-aanvragen' },
  { title: 'Reparatiewerk', price: 'Vanaf €250', category: 'Stucwerkzaamheden', href: '/offerte-aanvragen' },
  { title: 'Schilderwerk', price: 'Vanaf €11 m²', category: 'Schilderwerkzaamheden', href: '/offerte-aanvragen' },
  { title: 'Latex spuiten', price: 'Vanaf €11 m²', category: 'Schilderwerkzaamheden', href: '/offerte-aanvragen' },
  { title: 'Schilderwerk (hout)', price: 'Prijs per object', category: 'Schilderwerkzaamheden', href: '/offerte-aanvragen' },
]

export default function PopularServicesSection({ lang }: { lang: Lang }) {
  return (
    <section style={{ padding: '6rem 3.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="rv" style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3vw,3rem)', lineHeight: 1.1, color: 'var(--white)' }}>
            Onze <span style={{ color: 'var(--teal2)' }}>Diensten & Tarieven</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--white2)', marginTop: '1rem', fontWeight: 300 }}>
            Heldere prijzen, vakkundige uitvoering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((svc, i) => (
            <div key={i} className="rv" style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, borderColor 0.3s' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '0.75rem', fontWeight: 600 }}>
                {svc.category}
              </div>
              <h3 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem', marginTop: 0 }}>
                {svc.title}
              </h3>
              <div style={{ fontSize: '1.2rem', color: 'var(--white2)', fontWeight: 300, marginBottom: '2rem' }}>
                {svc.price}
              </div>
              
              <Link href={svc.href} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--teal2)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'var(--font-outfit)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Meer lezen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .rv:hover {
          border-color: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  )
}
