export default function TrustIconsBar() {
  const icons = [
    { title: 'Snel en Zonder Wachten', desc: 'Wij plannen efficiënt in', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Grote en Kleine Klussen', desc: 'Elk project krijgt aandacht', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { title: 'Persoonlijke Begeleiding', desc: '1-op-1 contact', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
  ];

  return (
    <section style={{ padding: '3rem 1.5rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {icons.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1rem', background: 'var(--bg)', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--white)', margin: '0 0 0.25rem 0' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--white2)', fontFamily: 'var(--font-outfit)' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
