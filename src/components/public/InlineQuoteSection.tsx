'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border2)',
  padding: '0.85rem 0',
  width: '100%',
  outline: 'none',
  fontFamily: 'var(--font-outfit)',
  fontSize: '0.95rem',
  color: 'var(--white)',
  fontWeight: 300,
  transition: 'border-color 0.25s',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.6rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--white)',
  fontFamily: 'var(--font-archivo)',
  display: 'block',
  marginBottom: '0.5rem',
}

export default function InlineQuoteSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', company: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = 'var(--teal2)'
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = 'var(--border2)'
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Er is iets misgegaan.')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Er is iets misgegaan.')
      setStatus('error')
    }
  }

  return (
    <section id="offerte-aanvraag" style={{ background: 'var(--bg)', padding: '6rem 3.5rem' }}>
      <div className="rv" style={{ maxWidth: 900, margin: '0 auto', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 24, padding: '4rem 3rem', position: 'relative', overflow: 'hidden' }}>
        
        {/* Background Accent */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(200, 169, 110, 0.03))', pointerEvents: 'none' }} />

        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: 'clamp(2rem,3vw,2.5rem)', color: 'var(--white)', marginBottom: '0.5rem' }}>
            Offerte <span style={{ color: 'var(--teal2)' }}>Aanvraag</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--white2)', fontWeight: 300 }}>
            Laat hier uw bericht achter. Wij komen dezelfde dag nog bij u terug!
          </p>
        </div>

        {status === 'success' ? (
          <div style={{ padding: '3rem 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'var(--teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.75rem' }}>
              Bericht verzonden!
            </div>
            <div style={{ fontSize: '1.05rem', color: 'var(--white2)', fontWeight: 300 }}>
              Bedankt voor uw aanvraag. We nemen binnen 24 uur contact met u op.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={labelStyle}>Naam</label>
                <input
                  type="text"
                  required
                  style={inputStyle}
                  placeholder="Uw naam"
                  value={form.name}
                  onChange={set('name')}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label style={labelStyle}>E-mailadres</label>
                <input
                  type="email"
                  required
                  style={inputStyle}
                  placeholder="Uw e-mailadres"
                  value={form.email}
                  onChange={set('email')}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={labelStyle}>Telefoonnummer</label>
                <input
                  type="tel"
                  required
                  style={inputStyle}
                  placeholder="+31 00 000 0000"
                  value={form.phone}
                  onChange={set('phone')}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label style={labelStyle}>Woonplaats / Service</label>
                <input
                  type="text"
                  style={inputStyle}
                  placeholder="Bijv. Amsterdam / Stucwerk"
                  value={form.service}
                  onChange={set('service')}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Honeypot field for bot protection (hidden) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input type="text" name="company" tabIndex={-1} value={form.company} onChange={set('company')} />
            </div>

            <div>
              <label style={labelStyle}>Beschrijving opdracht</label>
              <textarea
                required
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Beschrijf uw ruimte en wat u in gedachten heeft..."
                value={form.message}
                onChange={set('message')}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  background: 'var(--teal)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: 999,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-outfit)',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                {status === 'loading' ? 'Versturen...' : 'Versturen'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>

              {status === 'error' && (
                <span style={{ color: '#F87171', fontSize: '0.9rem', fontWeight: 300 }}>{errorMsg}</span>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
