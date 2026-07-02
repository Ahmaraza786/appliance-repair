import Header from './Header';
import Footer from './Footer';
import { PhoneModalProvider } from '@/context/PhoneModalContext';

export default function Layout({ children }) {
  return (
    <PhoneModalProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </PhoneModalProvider>
  );
}
