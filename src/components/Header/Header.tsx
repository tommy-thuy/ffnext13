import Menus from '../Menus/Menus';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className='sticky top-0 shadow-sm bg-background/80 backdrop-blur-sm md:static z-50 px-4 md:px-8 sm:py-4'>
     <Menus />    
  </header>
);
export default Header;
