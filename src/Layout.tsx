import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
