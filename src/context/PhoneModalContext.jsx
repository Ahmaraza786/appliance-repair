import { createContext, useCallback, useContext, useState } from 'react';
import PhoneModal from '@/components/PhoneModal';

const PhoneModalContext = createContext(null);

export function PhoneModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openPhoneModal = useCallback(() => setOpen(true), []);
  const closePhoneModal = useCallback(() => setOpen(false), []);

  return (
    <PhoneModalContext.Provider value={openPhoneModal}>
      {children}
      <PhoneModal open={open} onClose={closePhoneModal} />
    </PhoneModalContext.Provider>
  );
}

export function usePhoneModal() {
  const openPhoneModal = useContext(PhoneModalContext);
  if (!openPhoneModal) {
    throw new Error('usePhoneModal must be used within PhoneModalProvider');
  }
  return openPhoneModal;
}
