'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t, type Lang } from '@/lib/i18n';

export default function Navbar({ lang }: { lang: Lang }) {
  const tr = t[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = ''; };
  const toggleMenu = () => { const next = !menuOpen; setMenuOpen(next); document.body.style.overflow = next ? 'hidden' : ''; };

  const services = [
    { label: 'Sausklaar Stucwerk', href: '/diensten/sausklaar-stucwerk' },
    { label: 'Stucwerk', href: '/diensten/stucwerk' },
    { label: 'Dunpleister', href: '/diensten/dunpleister' },
    { label: 'Reparatiewerk', href: '/diensten/reparatiewerk' },
    { label: 'Schilderwerk', href: '/diensten/schilderwerk' },
    { label: 'Latex spuiten', href: '/diensten/latex-spuiten' },
    { label: 'Schilderwerk (hout)', href: '/diensten/schilderwerk-hout' },
  ];

  const desktopLinks = [
    { label: 'HOME', href: '/' },
    { label: 'OVER ONS', href: '/over-ons' },
    { label: 'ONZE DIENSTEN', href: '/onze-diensten', dropdown: services },
    { label: 'PORTFOLIO', href: '/projects' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'sticky', top: 0, zIndex: 200,
          padding: '1rem 3.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: '#ffffff',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        {/* Left: logo */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/lamar_icon.svg" alt="LAMAR" style={{ height: 42, width: 'auto', display: 'block' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.02em', color: 'var(--white)', lineHeight: 1 }}>LAMAR</span>
              <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--white2)', lineHeight: 1, marginTop: 4 }}>Stukadoor en Onderhoud</span>
            </div>
          </Link>
        </div>

        {/* Center: links */}
        <div className="hidden md:flex items-center justify-center gap-8" style={{ flex: 2 }}>
          {desktopLinks.map((item) => {
            if (item.dropdown) {
              const dienstenActive = isActive(item.href);
              return (
                <div key={item.label} style={{ position: 'relative' }} ref={dropdownRef}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    {/* Main link → navigates to /onze-diensten */}
                    <Link
                      href={item.href}
                      style={{
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        color: dienstenActive ? 'var(--teal2)' : 'var(--white2)',
                        fontFamily: 'var(--font-outfit)',
                        paddingBottom: 4,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--teal2)'; }}
                      onMouseLeave={(e) => { if (!dienstenActive) e.currentTarget.style.color = 'var(--white2)'; }}
                    >
                      {item.label}
                    </Link>
                    {/* Arrow button → toggles dropdown only */}
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-label="Diensten submenu"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '4px 2px 0',
                        cursor: 'pointer',
                        color: servicesOpen ? 'var(--teal2)' : 'var(--white2)',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--teal2)'; }}
                      onMouseLeave={(e) => { if (!servicesOpen) e.currentTarget.style.color = 'var(--white2)'; }}
                    >
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  {servicesOpen && (
                    <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '1rem', background: '#fff', borderRadius: '4px', padding: '0.5rem', minWidth: '200px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {item.dropdown.map(subItem => (
                        <Link key={subItem.href} href={subItem.href} onClick={() => setServicesOpen(false)} style={{ textDecoration: 'none', fontSize: '0.85rem', color: 'var(--white2)', padding: '0.75rem 1rem', borderRadius: '4px', transition: 'background 0.2s, color 0.2s', fontWeight: 500 }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.color = 'var(--teal2)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white2)'; }}>
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href}
                style={{ position: 'relative', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em', color: active ? 'var(--teal2)' : 'var(--white2)', transition: 'color 0.2s', fontFamily: 'var(--font-outfit)', paddingBottom: 4 }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--teal2)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = 'var(--white2)'; }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
          <Link href="/#offerte" className="inline-block"
            style={{ 
              background: 'var(--teal2)', 
              color: '#1A1A1A', 
              padding: '0.7rem 1.6rem', 
              borderRadius: 4, 
              textDecoration: 'none', 
              fontSize: '0.85rem', 
              fontWeight: 800, 
              letterSpacing: '0.02em', 
              fontFamily: 'var(--font-outfit)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.9)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
          >
            OFFERTE AANVRAAG
          </Link>

          <button onClick={toggleMenu} className="flex md:hidden flex-col gap-1.25 cursor-pointer p-1 bg-transparent border-none" aria-label="Menu" style={{ zIndex: 210 }}>
            <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--white)', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 199, background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', overflowY: 'auto', padding: '2rem 0' }}>
          {desktopLinks.map((item) => {
            if (item.dropdown) {
              return (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '100%' }}>
                  <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--white2)' }}>{item.label}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                    {item.dropdown.map(subItem => (
                      <Link key={subItem.href} href={subItem.href} onClick={closeMenu} style={{ textDecoration: 'none', fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', color: 'var(--white2)', opacity: 0.8 }}>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} onClick={closeMenu}
                style={{ textDecoration: 'none', fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.04em', color: active ? 'var(--teal2)' : 'var(--white2)', transition: 'color 0.2s' }}
              >{item.label}</Link>
            );
          })}
          <Link href="/#offerte" onClick={closeMenu}
            style={{ 
              background: 'var(--teal2)', color: '#1A1A1A', 
              padding: '0.9rem 2.5rem', borderRadius: 4, 
              textDecoration: 'none', fontFamily: 'var(--font-outfit)', 
              fontWeight: 800, fontSize: '1rem', marginTop: '0.75rem' 
            }}
          >OFFERTE AANVRAAG</Link>
        </div>
      )}
    </>
  );
}