import Link from 'next/link';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPresentation = () => {
  return (
    <aside
      data-aos="fade-up"
      data-aos-delay="50"
      className="h-full min-w-full flex-col rounded-lg md:flex md:w-full md:max-w-xl"
    >
      <h2 className="mb-8 text-4xl font-bold text-textPrimary md:text-5xl">Contact</h2>
      <h3 className="text-xl">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
      </h3>

      <section className="mt-20 flex flex-col items-start justify-around gap-4">
        <span className="flex items-center justify-center">
          <FaLinkedin className="mr-2 h-6 w-6" />
          <Link
            className="flex items-center transition-all ease-in hover:text-textPrimary"
            href="https://www.linkedin.com/in/tommy-thuy-0b9462128/"
            target="_blank"
          >
            Linkedin
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <FaGithub className="mr-2 h-6 w-6" />
          <Link
            className="flex items-center transition-all ease-in hover:text-textPrimary"
            href="https://github.com/ex-magazine"
            target="_blank"
          >
            GitHub
          </Link>
        </span>

        <span className="flex items-center justify-center">
          <BiLogoGmail className="mr-2 h-6 w-6" />
          <Link
            className="flex items-center transition-all ease-in hover:text-textPrimary"
            href="mailto:thuy.tranthanh.bd@gmail.com"
            target="_blank"
          >
            thuy.tranthanh.bd@gmail.com
          </Link>
        </span>
      </section>
    </aside>
  );
};

export default ContactPresentation;
