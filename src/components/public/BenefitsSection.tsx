import { t, type Lang } from '@/lib/i18n'
import { getSiteText } from '@/lib/siteText'

const IMG = 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=1150&fit=crop'

function BIcon({ name }: { name: string }) {
  const p = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--teal)', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'clock') return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>)
  if (name === 'phone') return (<svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
  if (name === 'shield') return (<svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>)
  return (<svg {...p}><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/></svg>)
}

type BItem = { icon: string; title: string; text: string }

function BenefitCard({ item, delay }: { item: BItem; delay: string }) {
  return (
    <div className={`rv ${delay}`} style={{ background: 'var(--bg3)', borderRadius: 20, padding: '1.75rem', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(26,28,32,0.03)', transition: 'transform 0.3s' }}>
      <span style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--bg2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <BIcon name={item.icon} />
      </span>
      <div>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--white)', marginBottom: '0.4rem' }}>{item.title}</div>
        <div style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--white2)', fontWeight: 300 }}>{item.text}</div>
      </div>
    </div>
  )
}

export default async function BenefitsSection({ lang }: { lang: Lang }) {
  const tr = t[lang].benefits
  const tx = await getSiteText()
  const items = tr.items.map((it, i) => ({
    icon: it.icon,
    title: tx(`home_benefits_item${i + 1}_title`),
    text: tx(`home_benefits_item${i + 1}_text`),
  }))
  
  const delays = ['', 'd1', 'd2', 'd3']

  return (
    <section id="benefits" style={{ background: 'var(--bg2)', padding: '7rem 3.5rem' }}>
      <div className="ben-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
        <div>
          <h2 className="rv" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3.4vw,3rem)', lineHeight: 1.1, letterSpacing: '0.01em', color: 'var(--white)', marginBottom: '1rem' }}>
            {tx('home_benefits_heading_a')} <span style={{ color: 'var(--teal2)' }}>{tx('home_benefits_heading_accent')}</span><br />{tx('home_benefits_heading_b')}
          </h2>
          <p className="rv" style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--white2)', fontWeight: 300, maxWidth: 460, marginBottom: '2.5rem' }}>{tx('home_benefits_sub')}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {items.map((it, i) => (
              <BenefitCard key={i} item={it} delay={delays[i]} />
            ))}
          </div>
        </div>

        <div className="ben-img rv d2" style={{ width: '100%', height: 680, borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(26,28,32,0.08)', backgroundImage: `url('${IMG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>
    </section>
  )
}
