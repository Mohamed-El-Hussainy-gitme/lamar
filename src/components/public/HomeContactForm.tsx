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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
          
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

          {/* Right: Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center', padding: '2rem 0' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ width: 80, height: 80 }}>
                {/* Clock icon SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                  <path d="M16 2l4 4-4 4"></path>
                  <path d="M20 6H10"></path>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', color: '#444', margin: 0 }}>
                Snel en efficiënt, <strong style={{ color: '#111' }}>ZONDER wachttijden!</strong>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ width: 80, height: 80 }}>
                {/* House/Tools icon SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  <path d="M22 9h-4l-3-3"></path>
                  <line x1="2" y1="22" x2="22" y2="22"></line>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', color: '#444', margin: 0 }}>
                Zowel grote, als <strong style={{ color: '#111' }}>kleine klussen.</strong>
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
              <div style={{ width: 80, height: 80 }}>
                {/* Support/Service icon SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', color: '#444', margin: 0 }}>
                <strong style={{ color: '#111' }}>Uitstekende service</strong> en garantie.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
