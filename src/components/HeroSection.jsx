import TaglineSubheadline from './TaglineSubheadline';
import PhoneTrigger from './PhoneTrigger';
import { PHONE_DISPLAY } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export default function HeroSection({ headline, subheadline, locationName, showBilingual = true }) {
  const city = locationName || 'Your City';

  const finalHeadline = headline || (
    <>
      Expert Appliance Repair
      <br />in <em>{city}</em>
    </>
  );

  return (
    <section className="hero-v2">
      <div className="hero-v2-media">
        <img
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          className="hero-v2-img"
          loading="eager"
          width="1600"
          height="900"
        />
        <div className="hero-v2-overlay" />
      </div>

      <div className="hero-v2-content">
        <div className="container hero-v2-inner">
          <div className="hero-v2-card">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Available Today · Nationwide
            </div>

            <h1>{finalHeadline}</h1>

            {subheadline ? (
              <p className="hero-v2-sub">{subheadline}</p>
            ) : showBilingual ? (
              <TaglineSubheadline className="hero-tagline" />
            ) : null}

            <div className="hero-v2-actions">
              <PhoneTrigger className="btn btn-accent btn-lg" id="hero-call-btn">
                <i className="ph-fill ph-phone-call"></i>
                Call {PHONE_DISPLAY}
              </PhoneTrigger>
              <a href="#services" className="btn btn-white btn-lg">
                Explore Services
              </a>
            </div>

            <div className="hero-v2-stats">
              <div className="hero-stat">
                <strong>40K+</strong>
                <span>Repairs Done</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>4.9★</strong>
                <span>Rating</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong>50</strong>
                <span>States</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
