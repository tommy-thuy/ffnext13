// "use client";
import Nav from '../Nav';
import Search from '../SearchBar';
import DesktopNav from '../Menus/DesktopNav';
import MobileNav from '../Menus/MobileNav';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="sm:border-b sm:border-gray-800">
    <div className="flex items-center justify-between px-4 md:px-8 py-2 sm:py-4">
      <Link href="/">
        <Image
          className="mx-auto h-10 w-auto"
          width={100}
          height={24}
          src="/assets/images/the-movie-db-logo.svg"
          alt=""
          priority
        />
      </Link>
      <Nav />
      <div className="flex justify-between">
        <Search />
        <DesktopNav />
        <MobileNav />
      </div>
    </div>
  </header>
);
export default Header;
