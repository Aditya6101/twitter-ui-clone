import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommunitiesIcon from './icons/CommunitiesIcon';
import DMIcon from './icons/DMIcon';
import HomeIcon from './icons/HomeIcon';
import NotificationIcon from './icons/NotificationIcon';
import SearchIcon from './icons/SearchIcon';

const Footer: FC = () => {
  const { pathname } = useRouter();

  return (
    <footer className="flex w-full items-center justify-between bg-white border-t fixed bottom-0 left-0">
      <Link href="/">
        <a className="flex items-center justify-center w-1/4 p-3">
          <HomeIcon isActive={pathname === '/'} className="p-px w-7 h-7" />
        </a>
      </Link>
      <Link href="/explore">
        <a className="flex items-center justify-center w-1/4 p-3">
          <SearchIcon
            isActive={pathname === '/explore'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/communities">
        <a className="flex items-center justify-center w-1/4 p-3">
          <CommunitiesIcon
            isActive={pathname === '/communities'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/notifications">
        <a className="flex items-center justify-center w-1/4 p-3">
          <NotificationIcon
            isActive={pathname === '/notifications'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/messages">
        <a className="flex items-center justify-center w-1/4 p-3">
          <DMIcon
            isActive={pathname === '/messages'}
            className="p-px w-7 h-7 active:bg-slate-300"
          />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
