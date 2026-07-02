import { useState } from 'react';
import PhoneModal from './PhoneModal';

export default function CallUsButton({ className = 'service-tile-link', label = 'Call Us', showArrow = true }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
        {showArrow && <i className="ph-bold ph-phone"></i>}
      </button>
      <PhoneModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
