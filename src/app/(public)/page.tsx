import { Metadata } from 'next';
import About from '@/components/ZustandPortfolio/About';
import ProjectsMap from '@/components/ZustandPortfolio/ProjectsMap';
import SkillsWithSoftskills from '@/components/ZustandPortfolio/SkillsWithSoftskills';
import ContactPage from '@/components/ZustandPortfolio/ContactPage';
import UpcomingMovies from '@/components/MovieHomepage/UpcomingMovies';
import PopularMovies from '@/components/MovieHomepage/PopularMovies';
import TopRatedMovies from '@/components/MovieHomepage/TopRatedMovies';

export const metadata: Metadata = {
  title: 'Coder - Home page',
  description:
    'Welcome to Coder - your destination to discover more about Zustand, its projects, skills and softskills.'
};
async function getMoviesv2(type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_API_KEY}&language=en-US`
  );
  return res.json();
}

export default async function Home() {  

  const popularMovies = await getMoviesv2('popular');
  const topRatedMovies = await getMoviesv2('top_rated');
  const upcomingMovies = await getMoviesv2('upcoming');
  return (
    <>   
       <main className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <UpcomingMovies upcomingMovies={upcomingMovies} />
        <PopularMovies popularMovies={popularMovies} />
        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </main>
      <section className="mt-10">
        <About />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <ProjectsMap />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <SkillsWithSoftskills />
      </section>
      <section className="mt-20 border-t border-gray-900 sm:border-gray-800">
        <ContactPage />
      </section>
    </>
  );
}
