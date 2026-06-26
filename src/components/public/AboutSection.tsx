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

    <section id="about" style={{ padding: '9rem 3.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', background: 'var(--bg)' }}>
      {/* Left text */}
      <div>
        <div className="rv" style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ display: 'block', width: '1.5rem', height: 1, background: 'var(--teal2)', flexShrink: 0 }} />
          {tr.tag}
        </div>
        <h2 className="rv d1" style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3vw,3rem)', lineHeight: 1.1, letterSpacing: '0.01em', color: 'var(--white)', marginBottom: '1.75rem' }}>
          {tr.heading}<br />{tr.headingPre} <span style={{ color: 'var(--teal2)' }}>{tr.headingTeal}</span>
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="rv d2" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--white2)', fontWeight: 300, marginBottom: '1rem' }}>
            {p}
          </p>
        ))}
        <div className="rv d3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2.5rem' }}>
          {tr.quals.map((q) => (
            <div key={q} className="qual-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--white)', padding: '0.8rem 0' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal2)', flexShrink: 0 }} />
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
            backgroundColor: 'var(--bg2)',
            backgroundImage: `url('${P}/13067890/pexels-photo-13067890.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(26,28,32,0.6) 100%)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: '-1.5rem', background: 'var(--teal)', padding: '2rem 1.75rem', borderRadius: 16, textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '3rem', color: 'var(--teal2)', lineHeight: 1, display: 'block' }}>5+</span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginTop: '0.5rem', display: 'block', lineHeight: 1.6 }}>
            {tr.yearsLabel[0]}<br />{tr.yearsLabel[1]}
          </span>
        </div>
        {/* Float card */}
        <div style={{ position: 'absolute', top: '2.5rem', right: '-1.5rem', background: 'var(--bg3)', border: '1px solid var(--border)', padding: '1.5rem 1.75rem', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '2rem', color: 'var(--white)', display: 'block', lineHeight: 1 }}>200+</span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white2)', marginTop: '0.5rem', display: 'block' }}>
            {tr.projectsLabel[0]}<br />{tr.projectsLabel[1]}
          </span>
        </div>
      </div>
    </section>
  )
}
