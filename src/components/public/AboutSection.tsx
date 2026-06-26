import { getContent } from '@/lib/content'
import { t, type Lang } from '@/lib/i18n'

const P = 'https://images.pexels.com/photos'

const FALLBACK_EN = `For more than five years, "Lamar Finishing and Painting", a specialized company, has been active in the contracting and finishing market. Thanks to an innovative vision, the company has gained a prominent and trusted position. At Lamar, we work with professional teams and technicians who provide integrated solutions for interior and exterior finishing and decoration. We combine the latest technologies with the highest quality and precision standards. We always strive to transform spaces into modern and sustainable environments that meet the wishes of our clients and reflect the highest standards of craftsmanship and aesthetics.`

const FALLBACK_NL = `Al meer dan vijf jaar is "Lamar Finishing and Painting", een gespecialiseerd bedrijf, actief in de aannemers- en afwerkingsmarkt. Dankzij een innovatieve visie heeft het bedrijf een vooraanstaande en vertrouwde positie verworven. Bij Lamar werken we met professionele teams en technici die geïntegreerde oplossingen bieden voor binnen- en buitenafwerking en -decoratie. We combineren de nieuwste technologieën met de hoogste kwaliteits- en precisienormen. We streven er altijd naar om ruimtes te transformeren tot moderne en duurzame omgevingen die voldoen aan de wensen van onze klanten en die de hoogste normen op het gebied van vakmanschap en esthetiek weerspiegelen.`

export default async function AboutSection({ lang }: { lang: Lang }) {
  const tr = t[lang].about
  const fallback = lang === 'nl' ? FALLBACK_NL : FALLBACK_EN
  const aboutText = await getContent('about_text', fallback)
  const paragraphs = aboutText.split('\n\n').filter(Boolean)

  return (
    <section id="about" style={{ padding: '9rem 3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', background: 'var(--bg)' }}>
      {/* Left text */}
      <div>
        <div className="rv" style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ display: 'block', width: '1.5rem', height: 1, background: 'var(--teal2)', flexShrink: 0 }} />
          {tr.tag}
        </div>
        <h2 className="rv d1" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(1.9rem,3vw,2.8rem)', lineHeight: 1.06, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.75rem' }}>
          {tr.heading}<br />{tr.headingPre} <span style={{ color: 'var(--teal2)' }}>{tr.headingTeal}</span>
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="rv d2" style={{ fontSize: '0.95rem', lineHeight: 1.82, color: 'var(--white2)', fontWeight: 300, marginBottom: '1rem' }}>
            {p}
          </p>
        ))}
        <div className="rv d3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7rem', marginTop: '2rem' }}>
          {tr.quals.map((q) => (
            <div key={q} className="qual-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.85rem', color: 'var(--white2)', padding: '0.8rem 1rem', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 3, transition: 'border-color 0.2s, color 0.2s' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--teal2)', flexShrink: 0 }} />
              {q}
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className="rvl" style={{ position: 'relative', paddingBottom: '1.5rem', paddingRight: '1.5rem' }}>
        <div
          style={{
            width: '100%',
            aspectRatio: '4/5',
            backgroundColor: '#3A5A50',
            backgroundImage: `url('${P}/13067890/pexels-photo-13067890.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(12,12,10,0.5) 100%)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: '-1rem', background: 'var(--teal)', padding: '1.75rem 1.5rem', borderRadius: 8, textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 900, fontSize: '2.6rem', color: 'var(--teal2)', lineHeight: 1, display: 'block' }}>5+</span>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: '0.35rem', display: 'block', lineHeight: 1.6 }}>
            {tr.yearsLabel[0]}<br />{tr.yearsLabel[1]}
          </span>
        </div>
        {/* Float card */}
        <div style={{ position: 'absolute', top: '2rem', right: 0, background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1.25rem 1.5rem', borderRadius: 3 }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '1.8rem', color: 'var(--white)', display: 'block', lineHeight: 1 }}>200+</span>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white2)', marginTop: '0.3rem', display: 'block' }}>
            {tr.projectsLabel[0]}<br />{tr.projectsLabel[1]}
          </span>
        </div>
      </div>
    </section>
  )
}
