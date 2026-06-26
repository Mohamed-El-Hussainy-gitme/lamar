import { t, type Lang } from '@/lib/i18n'
import { getSiteText } from '@/lib/siteText'

function Icon({ name }: { name: string }) {
  const p = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--teal2)', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'send') return (<svg {...p}><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg>)
  if (name === 'chat') return (<svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>)
  if (name === 'cal') return (<svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg>)
  return (<svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.6 2.6-2.1-.4-.4-2.1z"/></svg>)
}

export default async function ProcessSection({ lang }: { lang: Lang }) {
  const tr = t[lang].werkwijze
  const tx = await getSiteText()

    <section id="process" style={{ background: 'var(--bg)', padding: '7rem 3.5rem' }}>
      <div className="rv" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,3.1rem)', lineHeight: 1.06, letterSpacing: '0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
          {tx('home_process_heading_a')}<br />{tx('home_process_heading_b')} <span style={{ color: 'var(--teal2)' }}>{tx('home_process_heading_accent')}</span>
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--white2)', fontWeight: 300 }}>{tx('home_process_sub')}</p>
      </div>

      <div className="proc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 860, margin: '0 auto' }}>
        {tr.steps.map((s, i) => (
          <div key={i} className={`proc-card rv${i > 1 ? ' d1' : ''}`} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 20, padding: '3rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', transition: 'border-color 0.3s, transform 0.3s' }}>
            <span style={{ marginBottom: '0.5rem', width: 56, height: 56, borderRadius: '50%', background: 'var(--bg3)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><Icon name={s.icon} /></span>
            <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--white)' }}>{s.step}</div>
            <div style={{ fontSize: '1rem', color: 'var(--white2)', fontWeight: 300, lineHeight: 1.6 }}>{tx(`home_process_step${i + 1}`)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
