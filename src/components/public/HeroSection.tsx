import { t, type Lang } from '@/lib/i18n';
import { getContent } from '@/lib/content';
import { getSiteText } from '@/lib/siteText';

export default async function HeroSection({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  const tx = await getSiteText();
  const wa = await getContent('whatsapp_number', '31684054528');

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1rem 10rem',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="rv"
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* Headline */}
        <h1
          className="rv d1"
          style={{
            fontFamily: 'var(--font-archivo)',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            lineHeight: 1.2,
            color: '#fff',
            marginBottom: '2.5rem',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          BEST BEOORDEELDE <br />
          <span style={{ 
            fontWeight: 700, 
            textDecoration: 'underline', 
            textDecorationColor: '#fff',
            textDecorationThickness: '2px',
            textUnderlineOffset: '8px'
          }}>
            STUKADOORS & SCHILDERS
          </span> <br />
          VAN NEDERLAND!
        </h1>

        {/* CTAs */}
        <div
          className="rv d2"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a
            href="/offerte-aanvragen"
            className="hero-btn-hover"
            style={{
              background: 'var(--teal2)',
              color: '#000',
              padding: '1.2rem 2.5rem',
              fontFamily: 'var(--font-outfit)',
              fontSize: '1rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              fontWeight: 800,
              borderRadius: 4,
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(255, 217, 53, 0.3)',
              transition: 'transform 0.2s, filter 0.2s',
            }}
          >
            ONTVANG BINNEN 1 DAG UW OFFERTE!
          </a>
          
          <div
            style={{
              background: '#222',
              color: '#fff',
              padding: '0.8rem 1.5rem',
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 4,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              width: 20, height: 20, background: '#fff', color: '#222', 
              borderRadius: '50%', fontSize: '0.7rem', fontWeight: 900 
            }}>%</span>
            TIJDELIJKE KORTING TOT 10%!
          </div>
        </div>
      </div>

      {/* Floating Trust Badges */}
      <div 
        className="rv d3"
        style={{
          position: 'absolute',
          bottom: '-35px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          padding: '0 1rem',
          zIndex: 20,
        }}
      >
        <TrustBadge platform="Google" score="4.9" reviews="612" logo="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
        <TrustBadge platform="Trustoo" score="4.9" reviews="777" logo="https://trustoo.nl/favicon.ico" />
        <TrustBadge platform="Werkspot" score="4.7" reviews="247" logo="https://upload.wikimedia.org/wikipedia/commons/e/e3/Werkspot_logo_1.jpg" />
        <TrustBadge platform="Facebook" score="5.0" reviews="35" logo="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" />
      </div>
    </section>
  );
}

function TrustBadge({ platform, score, reviews, logo }: { platform: string, score: string, reviews: string, logo: string }) {
  return (
    <div style={{
      background: '#fff',
      padding: '0.75rem 1.25rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      minWidth: '220px',
    }}>
      <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', overflow: 'hidden' }}>
        <img src={logo} alt={platform} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '0.85rem', color: '#333' }}>{platform}</span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '0.7rem', color: '#666' }}>{reviews} reviews</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: 2 }}>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '1rem', color: '#111' }}>{score}</span>
          <span style={{ color: 'var(--teal2)', fontSize: '0.9rem', letterSpacing: '1px' }}>★★★★★</span>
        </div>
      </div>
    </div>
  );
}
