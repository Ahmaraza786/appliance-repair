import PhoneTrigger from './PhoneTrigger';
import { PHONE_DISPLAY } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

export default function CtaSection({ title, subtitle, secondaryLink, secondaryLabel }) {
  return (
    <section className="cta-v2">
      <img src={IMAGES.ctaBg} alt="" className="cta-v2-bg" aria-hidden="true" />
      <div className="cta-v2-overlay" />
      <div className="container cta-v2-content">
        <h2>{title || 'Broken Appliance? We\'ll Fix It Today.'}</h2>
        <p>{subtitle || 'Same-day service · Upfront pricing · 90-day warranty · All brands'}</p>
        <div className="cta-v2-actions">
          <PhoneTrigger className="btn btn-accent btn-lg">
            <i className="ph-fill ph-phone-call"></i> Call {PHONE_DISPLAY}
          </PhoneTrigger>
          {secondaryLink && (
            <a href={secondaryLink} className="btn btn-white btn-lg">{secondaryLabel}</a>
          )}
        </div>
      </div>
    </section>
  );
}
