import { type Lang } from '@/lib/i18n'

export default function VisionSection({ lang }: { lang: Lang }) {
  return (
    <section id="vision" style={{ padding: '8rem 3.5rem', background: 'var(--teal)', color: '#FFFFFF' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left Text */}
        <div className="rv">
          <div style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ display: 'block', width: '1.5rem', height: 1, background: 'var(--teal2)', flexShrink: 0 }} />
            {lang === 'nl' ? 'Onze Toekomst' : 'Our Future'}
          </div>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.1, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '2rem' }}>
            {lang === 'nl' ? 'Visie van ' : 'Vision of '}<span style={{ color: 'var(--teal2)' }}>Lamar Company</span>
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}>
            {lang === 'nl' 
              ? 'Wij streven ernaar ruimtes en gebouwen nieuw leven in te blazen en te renoveren met de nieuwste milieuvriendelijke afwerkings- en verftechnologieën. Zo dragen we op innovatieve wijze bij aan de ontwikkeling van de stedelijke infrastructuur in Nederland, waarbij esthetisch ontwerp in balans is met milieuvriendelijkheid.'
              : 'We strive to breathe new life into spaces and buildings, renovating them with the latest eco-friendly finishing and painting technologies. In doing so, we contribute innovatively to the development of urban infrastructure in the Netherlands, balancing aesthetic design with environmental friendliness.'}
          </p>
        </div>

        {/* Right Graphic/Design */}
        <div className="rvl" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1.2/1', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <div style={{ width: 50, height: 50, borderRadius: 16, background: 'var(--teal2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '1.5rem', fontWeight: 'bold' }}>
              🌱
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-archivo)' }}>
              {lang === 'nl' ? 'Milieuvriendelijk & Duurzaam' : 'Eco-Friendly & Sustainable'}
            </div>
            <div style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
              {lang === 'nl' 
                ? 'Onze materialen en technieken zijn zorgvuldig geselecteerd om de impact op het milieu te minimaliseren en tegelijkertijd een premium esthetische afwerking te garanderen.'
                : 'Our materials and techniques are carefully selected to minimize environmental impact while guaranteeing a premium aesthetic finish.'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
