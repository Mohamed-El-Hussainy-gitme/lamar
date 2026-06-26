import { t, type Lang } from '@/lib/i18n'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function ProjectsSlider({ lang }: { lang: Lang }) {
  const tr = t[lang].projectsPage
  
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  })

  if (!projects || projects.length === 0) return null;

  return (
    <section id="portfolio-slider" style={{ background: 'var(--bg)', padding: '6rem 0 8rem', overflow: 'hidden' }}>
      <style>{`
        .portfolio-track {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0 3.5rem 3rem;
          scroll-padding: 0 3.5rem;
        }
        @media (max-width: 768px) {
          .portfolio-track {
            padding: 0 1.5rem 3rem;
            scroll-padding: 0 1.5rem;
            gap: 1.25rem;
          }
        }
        .portfolio-card {
          scroll-snap-align: start;
          flex-shrink: 0;
          width: 400px;
          aspect-ratio: 3/4;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .portfolio-card {
            width: 85vw;
          }
        }
        .portfolio-card:hover {
          transform: translateY(-8px);
        }
        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,28,32,0.85) 0%, rgba(26,28,32,0.2) 50%, transparent 100%);
        }
        .portfolio-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transform: translateY(10px);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .portfolio-card:hover .portfolio-content {
          transform: translateY(0);
        }
      `}</style>
      
      <div className="rv" style={{ padding: '0 3.5rem', maxWidth: 1200, margin: '0 auto 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ display: 'block', width: '1.5rem', height: 1, background: 'var(--teal2)', flexShrink: 0 }} />
            Portfolio
          </div>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1, letterSpacing: '0.01em', color: 'var(--white)', margin: 0 }}>
            Onze <span style={{ color: 'var(--teal2)' }}>Projecten</span>
          </h2>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Decorative swipe arrows to hint horizontal scroll */}
          <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </div>
          <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal2)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </div>

      <div className="portfolio-track hide-scrollbar rv d1">
        {projects.map((item) => (
          <Link key={item.id} href={`/projects/${item.slug}`} className="portfolio-card">
            <img src={item.coverImageUrl || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'} alt={item.title} loading="lazy" className="portfolio-img" />
            <div className="portfolio-overlay" />
            <div className="portfolio-content">
              <h3 style={{ fontFamily: 'var(--font-playfair, var(--font-archivo))', fontWeight: 700, fontSize: '1.75rem', color: '#FFFFFF', margin: 0, lineHeight: 1.1 }}>
                {item.title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--teal2)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-outfit)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {tr.viewProject}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
