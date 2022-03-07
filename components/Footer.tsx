import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommunitiesIcon from './icons/CommunitiesIcon';
import DMIcon from './icons/DMIcon';
import HomeIcon from './icons/HomeIcon';
import NotificationIcon from './icons/NotificationIcon';
import SearchIcon from './icons/SearchIcon';

const Footer: FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <footer className="flex items-center justify-between px-4 py-3 border-t">
      <Link href="/">
        <a>
          <HomeIcon isActive={currentRoute === '/'} className="p-px w-7 h-7" />
        </a>
      </Link>
      <Link href="/explore">
        <a>
          <SearchIcon
            isActive={currentRoute === '/explore'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/communities">
        <a>
          <CommunitiesIcon
            isActive={currentRoute === '/communities'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/notifications">
        <a>
          <NotificationIcon
            isActive={currentRoute === '/notifications'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
      <Link href="/messages">
        <a>
          <DMIcon
            isActive={currentRoute === '/messages'}
            className="p-px w-7 h-7"
          />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
