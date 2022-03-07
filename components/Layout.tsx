import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeatherIcon from './icons/FeatherIcon';
import MessageIcon from './icons/MessageIcon';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="relative flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <button className="absolute p-3 rounded-full bg-twitter-blue bottom-20 right-4">
        {pathname === '/messages' ? (
          <MessageIcon className="p-px text-white h-7 w-7" />
        ) : (
          <FeatherIcon className="p-px text-white h-7 w-7" />
        )}
      </button>
      <Footer />
    </div>
  );
};

export default Layout;
