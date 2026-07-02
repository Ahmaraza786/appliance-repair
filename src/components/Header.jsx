import { useState } from 'react';
import Link from 'next/link';
import statesData from '@/data/states_only.json';
import { PHONE, PHONE_DISPLAY, BRAND_SHORT } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const cols = [[], [], [], []];
  statesData.forEach((state, i) => cols[i % 4].push(state));

  const closeMobile = () => {
    setMobileOpen(false);
    setAreasOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className="site-header">
      {/* Top utility bar */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <span className="header-topbar-msg">
            <i className="ph-fill ph-lightning"></i>
            Same-Day Appliance Repair · All 50 States
          </span>
          <a href={`tel:${PHONE}`} className="header-topbar-phone">
            <i className="ph-fill ph-phone"></i>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="header-main">
        <div className="container header-main-inner">
          <Link href="/" className="header-logo" onClick={closeMobile}>
            <span className="header-logo-icon">
              <i className="ph-fill ph-wrench"></i>
            </span>
            <span className="header-logo-text">
              <strong>{BRAND_SHORT}</strong>
              <small>Nationwide Service</small>
            </span>
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#team">Our Team</Link>
            <div
              className="header-mega-wrap"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="header-mega-trigger" aria-expanded={megaOpen}>
                Service Areas
                <i className={`ph-bold ph-caret-${megaOpen ? 'up' : 'down'}`}></i>
              </button>
              {megaOpen && (
                <div className="header-mega-panel">
                  <p className="header-mega-title">Select Your State</p>
                  <div className="header-mega-grid">
                    {cols.map((col, idx) => (
                      <div key={idx} className="header-mega-col">
                        {col.map(s => (
                          <Link key={s.slug} href={`/states/${s.slug}`}>{s.name}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/services">All Services</Link>
          </nav>

          <div className="header-right">
            <a href={`tel:${PHONE}`} className="btn btn-accent btn-sm header-call-btn">
              <i className="ph-fill ph-phone-call"></i>
              Call Now
            </a>
            <button
              className={`header-menu-btn ${mobileOpen ? 'is-open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                document.body.style.overflow = !mobileOpen ? 'hidden' : '';
              }}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`header-mobile ${mobileOpen ? 'is-open' : ''}`}>
        <div className="header-mobile-inner">
          <Link href="/" onClick={closeMobile}>Home</Link>
          <Link href="/#services" onClick={closeMobile}>Services</Link>
          <Link href="/#team" onClick={closeMobile}>Our Team</Link>
          <Link href="/services" onClick={closeMobile}>All Services</Link>
          <button
            className="header-mobile-areas-btn"
            onClick={() => setAreasOpen(!areasOpen)}
          >
            Service Areas
            <i className={`ph-bold ph-caret-${areasOpen ? 'up' : 'down'}`}></i>
          </button>
          {areasOpen && (
            <div className="header-mobile-states">
              {statesData.map(s => (
                <Link key={s.slug} href={`/states/${s.slug}`} onClick={closeMobile}>
                  {s.name}
                </Link>
              ))}
            </div>
          )}
          <a href={`tel:${PHONE}`} className="btn btn-accent header-mobile-call" onClick={closeMobile}>
            <i className="ph-fill ph-phone-call"></i> Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      {mobileOpen && <div className="header-mobile-backdrop" onClick={closeMobile} />}
    </header>
  );
}
