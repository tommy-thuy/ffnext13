import Icon from '../Icon';
import ThemeSwitcher from './ThemeSwitcher';
import Nav from '../Nav';

const Footer = () => (
  <>
  <div className="flex justify-between items-center border-t border-gray-900 sm:border-gray-800 fixed bottom-25 relative p-6 mb-20">
    <div className="flex gap-5">
      <a href="https://github.com/ex-magazine" target="_blank">
        <Icon name="twitter" className="w-8" />
      </a>
      <a href="https://github.com/ex-magazine" target="_blank">
        <Icon name="facebook" className="w-8" />
      </a>      
    </div>

    <ThemeSwitcher />
  </div>
  <div className="w-[1300px] max-w-full px-4 mx-auto">    
    <Nav />  
  </div> 
  </>
);

export default Footer;
