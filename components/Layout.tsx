import { FC, ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
