import { usePhoneModal } from '@/context/PhoneModalContext';

export default function CallUsButton({ className = 'service-tile-link', label = 'Call Us', showArrow = true }) {
  const openPhoneModal = usePhoneModal();

  return (
    <button type="button" className={className} onClick={openPhoneModal}>
      {label}
      {showArrow && <i className="ph-bold ph-phone"></i>}
    </button>
  );
}
