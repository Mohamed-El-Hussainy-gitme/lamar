'use client'

import { useState } from 'react'
import { t, type Lang } from '@/lib/i18n'

export default function FAQSection({
  lang,
  heading,
  items,
}: {
  lang: Lang
  heading?: string
  items?: { q: string; a: string }[]
}) {
  const tr = t[lang].faq
  const faqHeading = heading ?? tr.heading
  const faqItems = items ?? tr.items
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" style={{ background: 'var(--bg)', padding: '8rem 3.5rem' }}>
      <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: 860, margin: '0 auto' }}>
        
        <div className="rv" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white2)', border: '1px solid var(--border)', borderRadius: 999, padding: '0.5rem 1.25rem', marginBottom: '1.25rem' }}>
            FAQ
          </div>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,4vw,2.8rem)', lineHeight: 1.1, color: 'var(--white)', margin: 0 }}>
            {faqHeading}
          </h2>
        </div>

        <div className="rv d1" style={{ borderTop: '1px solid var(--border)' }}>
          {faqItems.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', padding: '2rem 0', textAlign: 'left' }}
                >
                  <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--white)', lineHeight: 1.3 }}>{it.q}</span>
                  
                  {/* Circular thin plus/minus icon */}
                  <span style={{ 
                    flexShrink: 0, 
                    width: 32, 
                    height: 32, 
                    borderRadius: '50%', 
                    border: '1px solid var(--border2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--white2)',
                    transition: 'transform 0.3s, background-color 0.3s, color 0.3s', 
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    background: isOpen ? 'var(--bg2)' : 'transparent',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div style={{ maxHeight: isOpen ? 320 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease, opacity 0.35s ease', opacity: isOpen ? 1 : 0 }}>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--white2)', fontWeight: 300, paddingBottom: '2rem', margin: 0, maxWidth: '90%' }}>{it.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
