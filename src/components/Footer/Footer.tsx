import Icon from '../Icon';
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => (
  <div className="flex justify-between items-center p-6 border-t border-gray-900 sm:border-gray-800">
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
);

export default Footer;
