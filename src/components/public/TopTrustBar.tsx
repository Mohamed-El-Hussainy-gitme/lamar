import { getSiteText } from '@/lib/siteText';

export default async function TopTrustBar() {
  return (
    <div id="top-trust-bar" style={{ background: '#3b3b3b', padding: '0.6rem 1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 1200, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 700 }}>✓</span>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: '0.85rem', color: '#fff' }}>Meer dan 2835 tevreden klanten</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#fff', fontSize: '1rem' }}>★</span>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: '0.85rem', color: '#fff' }}>Gemiddeld <strong style={{ fontWeight: 800 }}>4,9/5</strong> sterren</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 700 }}>✓</span>
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 500, fontSize: '0.85rem', color: '#fff' }}>Gratis een vrijblijvende offerte</span>
        </div>
        
        {/* Language selector placeholder */}
        <div className="hidden md:flex" style={{ position: 'absolute', right: 0, alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
          <img src="https://flagcdn.com/w20/nl.png" alt="NL" style={{ width: 16, height: 'auto', borderRadius: 2 }} />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}