import { getContentMany } from '@/lib/content'
import { t, type Lang } from '@/lib/i18n'

const services = [
  {
    key: 'service_bouw',
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 21V9a3 3 0 0 1 6 0v12M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15" />
      </svg>
    ),
  },
  {
    key: 'service_afwerking',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.886H3.888l5.018 3.646L6.994 18.42 12 14.772l5.006 3.648-1.912-5.888 5.018-3.646h-6.2L12 3Z" />
      </svg>
    ),
  },
]

const delays = ['d1', 'd2']

export default async function ServicesSection({ lang }: { lang: Lang }) {
  const tr = t[lang].services
  const content = await getContentMany([
    ...services.map((s) => s.key),
    ...services.map((s) => `${s.key}_title`),
  ])

  return (
    <section id="services" style={{ padding: '8rem 3.5rem', background: 'var(--bg)' }}>
      <div className="rv" style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3vw,3rem)', lineHeight: 1.06, letterSpacing: '0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
          {tr.heading}
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--white2)', fontWeight: 300, maxWidth: 800, margin: '0 auto 4rem' }}>
          {lang === 'nl'
            ? 'Wij bieden een compleet dienstenpakket dat aansluit op de behoeften van alle Nederlandse steden. We ondersteunen onze klanten met lokale expertise en professionele oplossingen die hen helpen weloverwogen beslissingen te nemen en daadwerkelijke waarde te realiseren.'
            : 'We offer a complete range of services that meets the needs of all Dutch cities. We support our clients with local expertise and professional solutions that help them make informed decisions and realize actual value.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', maxWidth: 1200, margin: '0 auto' }}>
        {services.map((svc, i) => {
          const svcTr = tr.items[svc.key] ?? { name: svc.key, fallback: '' }
          const displayName = content[`${svc.key}_title`] ?? svcTr.name
          return (
            <div
              key={svc.key}
              className={`rv ${delays[i]}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Image Card with Number Cutout */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '1.5rem', overflow: 'hidden', background: 'var(--bg2)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.img} alt={displayName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Bottom Right Cutout overlay */}
                <div style={{ position: 'absolute', bottom: -1, right: -1, background: 'var(--bg)', width: 140, height: 140, borderTopLeftRadius: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '1.5rem', paddingRight: '1rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 300, color: 'var(--white3)', fontFamily: 'var(--font-outfit)', lineHeight: 1 }}>
                    0{i + 1}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--white3)', fontFamily: 'var(--font-outfit)', marginTop: 4 }}>
                    {displayName}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--white)' }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.75rem', color: 'var(--white)', margin: 0 }}>
                    {displayName}
                  </h3>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--white2)', fontWeight: 300, margin: 0 }}>
                  {content[svc.key] ?? svcTr.fallback}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
