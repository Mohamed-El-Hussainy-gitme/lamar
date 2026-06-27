import { getContentMany } from '@/lib/content'

function StepIcon({ name }: { name: string }) {
  const p = {
    width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'var(--teal2)', strokeWidth: 2,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  }
  if (name === 'send') return (
    <svg {...p}>
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  )
  if (name === 'chat') return (
    <svg {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
  if (name === 'cal') return (
    <svg {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <polyline points="9 16 11 18 15 14"/>
    </svg>
  )
  // tool / wrench
  return (
    <svg {...p}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.6 2.6-2.1-.4-.4-2.1z"/>
    </svg>
  )
}

const FALLBACK = {
  heading: 'Zo pakken wij het aan',
  sub: 'Helder, eerlijk en zonder omwegen — van eerste contact tot perfecte oplevering.',
  steps: [
    {
      title: 'Inventarisatie',
      text: "U deelt uw foto's, wensen en afmetingen. Snel, eenvoudig en vrijblijvend.",
    },
    {
      title: 'Advies & offerte',
      text: 'Wij stellen een passend plan op met een heldere, vaste prijs — geen verrassingen.',
    },
    {
      title: 'Planning',
      text: 'Na akkoord leggen wij alles vast en plannen we samen de startdatum.',
    },
    {
      title: 'Uitvoering & oplevering',
      text: 'Wij voeren het stuc- en schilderwerk vakkundig uit en leveren netjes op.',
    },
  ],
}
const ICONS = ['send', 'chat', 'cal', 'tool']

export default async function WerkwijzeIntro() {
  const c = await getContentMany([
    'werkwijze_heading', 'werkwijze_sub',
    'werkwijze_step1_title', 'werkwijze_step1_text',
    'werkwijze_step2_title', 'werkwijze_step2_text',
    'werkwijze_step3_title', 'werkwijze_step3_text',
    'werkwijze_step4_title', 'werkwijze_step4_text',
  ])

  const heading = c['werkwijze_heading'] || FALLBACK.heading
  const sub = c['werkwijze_sub'] || FALLBACK.sub
  const steps = FALLBACK.steps.map((s, i) => ({
    tag: `Stap ${i + 1}`,
    title: c[`werkwijze_step${i + 1}_title`] || s.title,
    text: c[`werkwijze_step${i + 1}_text`] || s.text,
    icon: ICONS[i],
  }))

  return (
    <>
      {/* ── HERO INTRO ─────────────────────────────────────── */}
      <section
        id="werkwijze-intro"
        style={{
          background: '#1A1A1A',
          padding: '7rem 1.5rem 5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 60% at 50% 120%, rgba(255,217,53,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Top line decoration */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3, background: 'var(--teal2)',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Label */}
          <div className="rv" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,217,53,0.1)', border: '1px solid rgba(255,217,53,0.25)',
            borderRadius: 50, padding: '0.35rem 1.1rem', marginBottom: '1.75rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal2)', display: 'block' }} />
            <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal2)' }}>
              Onze werkwijze
            </span>
          </div>

          <h1
            className="rv d1"
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 800,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.1,
              color: '#fff',
              margin: '0 0 1.25rem',
            }}
          >
            {heading}
          </h1>

          <p
            className="rv d2"
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-outfit)',
              maxWidth: 650,
              margin: '0 auto',
            }}
          >
            {sub}
          </p>
        </div>
      </section>

      {/* ── STEPS TIMELINE ─────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Desktop: 4-column grid */}
          <div className="ww-grid rv" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            position: 'relative',
          }}>
            {/* Connecting line behind cards */}
            <div className="ww-connector" style={{
              position: 'absolute',
              top: 44,
              left: '12.5%',
              right: '12.5%',
              height: 2,
              background: 'linear-gradient(90deg, var(--teal2) 0%, rgba(255,217,53,0.2) 100%)',
              zIndex: 0,
            }} />

            {steps.map((s, i) => (
              <div
                key={i}
                className={`rv d${i + 1} ww-step`}
                style={{
                  background: 'var(--bg)',
                  padding: '0 1rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Step number circle */}
                <div style={{
                  width: 88, height: 88, borderRadius: '50%',
                  background: i === 0 ? 'var(--teal2)' : 'var(--bg2)',
                  border: `2px solid ${i === 0 ? 'var(--teal2)' : 'var(--border)'}`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: i === 0 ? '0 8px 25px rgba(255,217,53,0.3)' : 'none',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-archivo)',
                    fontWeight: 900, fontSize: '1.35rem',
                    color: i === 0 ? '#1A1A1A' : 'var(--teal2)',
                    lineHeight: 1,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,217,53,0.08)', border: '1px solid rgba(255,217,53,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <StepIcon name={s.icon} />
                </div>

                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600, fontSize: '0.75rem',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: 'var(--teal2)', marginBottom: '0.5rem',
                }}>
                  {s.tag}
                </div>

                <div style={{
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 700, fontSize: '1.1rem',
                  color: 'var(--white)', marginBottom: '0.75rem',
                }}>
                  {s.title}
                </div>

                <div style={{
                  fontSize: '0.9rem', lineHeight: 1.65,
                  color: 'var(--white2)', fontFamily: 'var(--font-outfit)',
                }}>
                  {s.text}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="ww-vertical" style={{ display: 'none' }}>
            {steps.map((s, i) => (
              <div
                key={i}
                className={`rv d${i + 1}`}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  paddingBottom: '2rem',
                  borderLeft: i < steps.length - 1 ? '2px solid rgba(255,217,53,0.2)' : 'none',
                  marginLeft: '1.5rem',
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--teal2)', color: '#1A1A1A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-archivo)', fontWeight: 900, fontSize: '0.9rem',
                  flexShrink: 0, marginLeft: '-1.625rem',
                  boxShadow: '0 4px 15px rgba(255,217,53,0.3)',
                }}>
                  {i + 1}
                </div>
                <div style={{ paddingTop: '0.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--white)', marginBottom: '0.4rem' }}>{s.title}</div>
                  <div style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--white2)', fontFamily: 'var(--font-outfit)' }}>{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAR ────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '3rem 1.5rem' }}>
        <div className="rv" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--white)', marginBottom: '0.35rem' }}>
              Klaar om te starten?
            </div>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.92rem', color: 'var(--white2)' }}>
              Vraag vandaag nog uw vrijblijvende offerte aan.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/offerte-aanvragen"
              className="btn-teal"
              style={{
                background: 'var(--teal2)', color: '#1A1A1A',
                padding: '0.9rem 2rem', borderRadius: 6, textDecoration: 'none',
                fontWeight: 800, fontSize: '0.9rem', fontFamily: 'var(--font-outfit)',
                letterSpacing: '0.04em', textTransform: 'uppercase',
              }}
            >
              Offerte aanvragen →
            </a>
            <a
              href="/contact"
              className="btn-outline"
              style={{
                border: '1px solid var(--border2)', color: 'var(--white2)',
                padding: '0.9rem 2rem', borderRadius: 6, textDecoration: 'none',
                fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-outfit)',
                letterSpacing: '0.04em', textTransform: 'uppercase',
              }}
            >
              Contact opnemen
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .ww-grid { display: none !important; }
          .ww-vertical { display: flex !important; flex-direction: column; }
          .ww-connector { display: none; }
        }
        .ww-step:hover > div:first-child {
          background: var(--teal2) !important;
          border-color: var(--teal2) !important;
          box-shadow: 0 8px 25px rgba(255,217,53,0.3) !important;
        }
        .ww-step:hover > div:first-child span {
          color: #1A1A1A !important;
        }
      `}</style>
    </>
  )
}
