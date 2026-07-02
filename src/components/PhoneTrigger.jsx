import { usePhoneModal } from '@/context/PhoneModalContext';

export default function PhoneTrigger({ className, children, onClick, ...rest }) {
  const openPhoneModal = usePhoneModal();

  const handleClick = (e) => {
    onClick?.(e);
    openPhoneModal();
  };

  return (
    <button type="button" className={className} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}
