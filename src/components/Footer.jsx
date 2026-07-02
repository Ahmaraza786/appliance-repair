import Link from 'next/link';
import { PHONE, PHONE_DISPLAY, BRAND, TAGLINE_EN } from '@/lib/constants';

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="header-logo footer-logo">
                <span className="header-logo-icon"><i className="ph-fill ph-wrench"></i></span>
                <span className="header-logo-text">
                  <strong>Appliance Repair</strong>
                  <small>Pros · Nationwide</small>
                </span>
              </Link>
              <p>{TAGLINE_EN}</p>
              <a href={`tel:${PHONE}`} className="footer-phone">
                <i className="ph-fill ph-phone"></i> {PHONE_DISPLAY}
              </a>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                <ul>
                  <li><a href={`tel:${PHONE}`}>Refrigerator Repair</a></li>
                  <li><a href={`tel:${PHONE}`}>Washer & Dryer</a></li>
                  <li><a href={`tel:${PHONE}`}>Oven & Range</a></li>
                  <li><a href={`tel:${PHONE}`}>Dishwasher Repair</a></li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/#team">Our Team</Link></li>
                  <li><Link href="/#states">Service Areas</Link></li>
                  <li><Link href="/services">All Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} {BRAND}</span>
            <span>Serving all 50 US states</span>
          </div>
        </div>
      </footer>
      <div className="mobile-sticky-cta">
        <a href={`tel:${PHONE}`}><i className="ph-fill ph-phone"></i> Call {PHONE_DISPLAY}</a>
      </div>
    </>
  );
}
