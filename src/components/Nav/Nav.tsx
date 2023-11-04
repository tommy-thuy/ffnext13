'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import Icon, { IconType } from '../Icon';

interface NavItem {
  title: string;
  slug: string;
  icon: IconType;
}

const navItems: NavItem[] = [
  {
    title: 'None Cache',
    slug: '/none-cache-movies',
    icon: 'plus'
  },
  {
    title: 'Movies/SWR',
    slug: '/movie',
    icon: 'movies'
  },
  {
    title: 'Tivi Shows/SWR',
    slug: '/tv',
    icon: 'tv'
  },
  {
    title: 'My List',
    slug: '/my-list',
    icon: 'heart'
  }
];

const Nav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav className="flex justify-between items-center px-0 sm:px-0">     
      {navItems.map((item) => (
        <div key={item.title}>
          <Link 
            href={item.slug}
            className={`flex flex-col justify-end items-center hover:text-yellow-500 text-sm sm:mr-6 sm:flex-row sm:justify-center ${
              pathname.includes(item.slug) && 'text-yellow-500'
            }`}
          >
            <Icon name={item.icon} className="w-5 mb-1 h-5 sm:mr-2 sm:mb-0" />
            <span>{item.title}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
