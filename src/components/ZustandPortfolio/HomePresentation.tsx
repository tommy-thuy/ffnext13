import HomeLinks from './HomeLinks';
import TypingEffect from './TypingEffect';

function HomePresentation() {
  return (
    <article className="mt-4  items-center md:mt-0 md:items-start">
      <span data-aos-delay="300" data-aos="fade-right" className="text-xl md:text-5xl">
        Hello, I am
      </span>
      <h1 data-aos="fade-right" data-aos-delay="400" className="text-7xl font-bold md:ml-16 md:text-8xl">
        Zustand
        <span data-aos="fade-up" data-aos-delay="1000" className="text-xl md:text-3xl">
          .
        </span>
      </h1>
      <TypingEffect />
      <HomeLinks />
    </article>
  );
}

export default HomePresentation;
