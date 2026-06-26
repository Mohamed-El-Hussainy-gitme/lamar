export default function Logo({ className, scale = 1, white = false }: { className?: string, scale?: number, white?: boolean }) {
  const primary = white ? '#FFFFFF' : 'var(--teal)';
  
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 220 * scale }}>
      <svg width={220 * scale} height={90 * scale} viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        {/* Roof line */}
        <path d="M 25 45 Q 80 8 115 10 L 195 48" stroke="var(--teal2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        {/* Chimney */}
        <path d="M 160 22 L 160 12 L 170 12 L 170 27" stroke="var(--teal2)" strokeWidth="3" strokeLinejoin="round" fill="none" />
        
        {/* Window */}
        <rect x="107" y="20" width="14" height="14" stroke="var(--teal2)" strokeWidth="2.5" fill="none" />
        <line x1="114" y1="20" x2="114" y2="34" stroke="var(--teal2)" strokeWidth="2" />
        <line x1="107" y1="27" x2="121" y2="27" stroke="var(--teal2)" strokeWidth="2" />
        
        {/* Text 'Lamar' */}
        <text x="110" y="68" textAnchor="middle" fontFamily="var(--font-archivo)" fontStyle="italic" fontWeight="700" fontSize="48" fill={primary}>
          Lamar
        </text>

        {/* Bottom Swoosh */}
        <path d="M 20 78 Q 110 100 200 68" stroke="var(--teal2)" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      {/* Tagline */}
      <div style={{ fontFamily: 'var(--font-outfit)', fontSize: `${0.62 * scale}rem`, letterSpacing: '0.18em', textTransform: 'uppercase', color: primary, marginTop: `${2 * scale}px`, fontWeight: 500, whiteSpace: 'nowrap' }}>
        Stukadoor en Renovatie
      </div>
    </div>
  )
}
