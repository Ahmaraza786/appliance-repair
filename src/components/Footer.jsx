import Link from 'next/link';
import PhoneTrigger from './PhoneTrigger';
import { PHONE_DISPLAY, BRAND, TAGLINE_EN } from '@/lib/constants';

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
              <PhoneTrigger className="footer-phone">
                <i className="ph-fill ph-phone"></i> {PHONE_DISPLAY}
              </PhoneTrigger>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                <ul>
                  <li><PhoneTrigger className="footer-link-btn">Refrigerator Repair</PhoneTrigger></li>
                  <li><PhoneTrigger className="footer-link-btn">Washer & Dryer</PhoneTrigger></li>
                  <li><PhoneTrigger className="footer-link-btn">Oven & Range</PhoneTrigger></li>
                  <li><PhoneTrigger className="footer-link-btn">Dishwasher Repair</PhoneTrigger></li>
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
        <PhoneTrigger className="mobile-sticky-call">
          <i className="ph-fill ph-phone"></i> Call {PHONE_DISPLAY}
        </PhoneTrigger>
      </div>
    </>
  );
}
