import Link from 'next/link';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HomeLinks = () => {
  return (
    <span
      className="left-0 mt-4 flex  transition-all
     md:left-0"
    >
      <Link
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex items-center"
        href="https://www.linkedin.com/in/tommy-thuy-0b9462128"
        target="_blank"
      >
        <FaLinkedin className="m-1 h-8 w-8 transition-all ease-in hover:-mt-1 hover:text-yellow-400" />
      </Link>

      <Link
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex items-center"
        href="https://github.com/ex-magazine"
        target="_blank"
      >
        <FaGithub className="m-1 h-8 w-8 transition-all ease-in hover:-mt-1 hover:text-yellow-400" />
      </Link>
    </span>
  );
};

export default HomeLinks;
