'use client';

import { useState } from 'react';

export default function HomeContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section style={{ padding: '6rem 1.5rem', background: '#f9f9f9', position: 'relative' }} id="offerte">
      <div className="rv" style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: 'clamp(2rem,3vw,2.5rem)', color: '#111' }}>
            Offerte aanvraag
          </h2>
          <div style={{ width: 100, height: 3, background: 'var(--teal2)', margin: '1rem auto 1.5rem' }} />
          <p style={{ color: '#444', fontSize: '1.1rem', fontFamily: 'var(--font-outfit)', maxWidth: 600, margin: '0 auto' }}>
            Laat hier uw bericht achter. Wij komen dezelfde dag nog bij u terug!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Form */}
          <div style={{ position: 'relative' }}>
            
            {/* Floating Discount Badge */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '20px',
              background: '#222',
              color: '#fff',
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 4,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 10,
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
              <span style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                width: 18, height: 18, background: '#fff', color: '#222', 
                borderRadius: '50%', fontSize: '0.65rem', fontWeight: 900 
              }}>%</span>
              TIJDELIJKE KORTING TOT 10%!
            </div>

            <div style={{ background: '#fff', padding: '3.5rem 2.5rem 2.5rem', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border)' }}>
              {success ? (
                <div style={{ background: '#E6F4EA', color: '#137333', padding: '2rem', borderRadius: 8, textAlign: 'center', fontFamily: 'var(--font-outfit)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-archivo)' }}>Bedankt voor uw aanvraag!</h3>
                  <p>Wij hebben uw gegevens ontvangen en nemen binnen 24 uur contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <input type="text" placeholder="Naam" required style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid var(--border)', fontFamily: 'var(--font-outfit)', fontSize: '0.95rem', background: '#f5f5f5' }} />
                  <input type="email" placeholder="E-mailadres" required style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid var(--border)', fontFamily: 'var(--font-outfit)', fontSize: '0.95rem', background: '#f5f5f5' }} />
                  <input type="tel" placeholder="Telefoonnummer" required style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid var(--border)', fontFamily: 'var(--font-outfit)', fontSize: '0.95rem', background: '#f5f5f5' }} />
                  <input type="text" placeholder="Woonplaats" required style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid var(--border)', fontFamily: 'var(--font-outfit)', fontSize: '0.95rem', background: '#f5f5f5' }} />
                  <textarea placeholder="Beschrijving opdracht" required rows={4} style={{ width: '100%', padding: '1rem', borderRadius: 4, border: '1px solid var(--border)', fontFamily: 'var(--font-outfit)', fontSize: '0.95rem', background: '#f5f5f5', resize: 'vertical' }}></textarea>

                  <button type="submit" disabled={loading} style={{ 
                    background: 'var(--teal2)', color: '#000', padding: '1.2rem', 
                    borderRadius: 4, border: 'none', fontFamily: 'var(--font-archivo)', 
                    fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', 
                    transition: 'all 0.2s', marginTop: '0.5rem',
                    opacity: loading ? 0.7 : 1
                  }} 
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.95)'; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}>
                    {loading ? 'Bezig met verzenden...' : 'Offerte Aanvragen'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Features — illustrated icons like vanibra.nl */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', justifyContent: 'center', padding: '1rem 0' }}>

            {/* Feature 1: Fast / No waiting */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
              <div style={{ width: 110, height: 80 }}>
                {/* Clock with speed motion lines */}
                <svg viewBox="0 0 110 80" fill="none" stroke="#1a1a1a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  {/* Three speed lines on the left */}
                  <path d="M4 24 L16 24 Q22 24 22 30" />
                  <line x1="2" y1="40" x2="22" y2="40" />
                  <path d="M4 56 L16 56 Q22 56 22 50" />
                  {/* Clock outer circle */}
                  <circle cx="70" cy="40" r="32" />
                  {/* Clock inner ring (subtle) */}
                  <circle cx="70" cy="40" r="2.5" fill="#1a1a1a" stroke="none" />
                  {/* Hour ticks */}
                  <line x1="70" y1="10" x2="70" y2="16" />
                  <line x1="70" y1="64" x2="70" y2="70" />
                  <line x1="40" y1="40" x2="46" y2="40" />
                  <line x1="94" y1="40" x2="100" y2="40" />
                  {/* Clock hands */}
                  <line x1="70" y1="40" x2="70" y2="22" strokeWidth="2.8" />
                  <line x1="70" y1="40" x2="84" y2="47" strokeWidth="2.3" />
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.05rem', color: '#333', margin: 0, lineHeight: 1.5 }}>
                Snel en efficiënt, <strong style={{ color: '#111' }}>ZONDER wachttijden!</strong>
              </p>
            </div>

            {/* Feature 2: Big and small jobs */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
              <div style={{ width: 100, height: 90 }}>
                {/* House with scale arrows */}
                <svg viewBox="0 0 110 105" fill="none" stroke="#1a1a1a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  {/* Roof */}
                  <polyline points="8 52 54 12 100 52" />
                  {/* Chimney */}
                  <rect x="68" y="26" width="11" height="22" />
                  {/* House walls */}
                  <rect x="18" y="52" width="72" height="46" />
                  {/* Door */}
                  <path d="M42 98 L42 68 Q42 63 48 63 L62 63 Q68 63 68 68 L68 98" />
                  {/* Horizontal double-headed arrow at bottom */}
                  <line x1="2" y1="104" x2="108" y2="104" />
                  <polyline points="8 100 2 104 8 108" />
                  <polyline points="102 100 108 104 102 108" />
                  {/* Vertical arrow on right side */}
                  <line x1="108" y1="12" x2="108" y2="98" />
                  <polyline points="104 18 108 12 112 18" />
                  <line x1="104" y1="98" x2="112" y2="98" />
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.05rem', color: '#333', margin: 0, lineHeight: 1.5 }}>
                Zowel grote, als <strong style={{ color: '#111' }}>kleine klussen.</strong>
              </p>
            </div>

            {/* Feature 3: 1-on-1 guidance */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem' }}>
              <div style={{ width: 100, height: 90 }}>
                {/* Person with circular arrows and chat bubble */}
                <svg viewBox="0 0 100 95" fill="none" stroke="#1a1a1a" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  {/* Chat bubble top-right */}
                  <path d="M58 5 L88 5 Q93 5 93 10 L93 26 Q93 31 88 31 L76 31 L70 38 L70 31 L58 31 Q53 31 53 26 L53 10 Q53 5 58 5 Z" />
                  {/* Person head */}
                  <circle cx="36" cy="45" r="13" />
                  {/* Person body/shoulders */}
                  <path d="M14 88 Q14 66 36 66 Q58 66 58 88" />
                  {/* Left circular arrow arc */}
                  <path d="M10 50 A28 28 0 0 1 36 22" />
                  <polyline points="6 43 10 50 17 46" />
                  {/* Right circular arrow arc */}
                  <path d="M62 50 A28 28 0 0 0 36 22" />
                  <polyline points="66 43 62 50 55 46" />
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.05rem', color: '#333', margin: 0, lineHeight: 1.5 }}>
                1 op 1 begeleiding <strong style={{ color: '#111' }}>gedurende het hele traject.</strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}