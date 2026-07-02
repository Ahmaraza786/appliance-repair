import { useEffect } from 'react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

export default function PhoneModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="phone-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="phone-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="phone-modal-title"
      >
        <button className="phone-modal-close" onClick={onClose} aria-label="Close">
          <i className="ph-bold ph-x"></i>
        </button>

        <div className="phone-modal-icon">
          <i className="ph-fill ph-phone-call"></i>
        </div>

        <p className="phone-modal-eyebrow">Available Now · Same-Day Service</p>
        <h2 id="phone-modal-title">Call Us Today</h2>
        <p className="phone-modal-sub">Speak with a local appliance repair expert</p>

        <a href={`tel:${PHONE}`} className="phone-modal-number">
          {PHONE_DISPLAY}
        </a>

        <a href={`tel:${PHONE}`} className="btn btn-accent btn-lg phone-modal-call">
          <i className="ph-fill ph-phone-call"></i>
          Tap to Call Now
        </a>
      </div>
    </div>
  );
}
