import Menus from '../Menus/Menus';
import Container from '../Container'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="sticky top-0 shadow-lg bg-background/80 backdrop-blur-lg lg:static z-20">
    <div className='w-full max-w-full px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 mx-auto'>
      <Menus />
    </div>
  </header>
);
export default Header;
