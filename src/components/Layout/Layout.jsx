import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {children}
      {pathname === '/' && <Footer />}
    </>
  );
}
