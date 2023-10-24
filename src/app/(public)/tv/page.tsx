'use client';
import useSWR from 'swr';
import { useGenres } from '@/context/genres';

import MovieListScrolling from '@/components/MovieListScrolling';
import TitleWithMoreButton from '@/components/TitleWithMoreButton';

const TvPage = () => {
  const { tvGenres } = useGenres();
  const { data: airingToday } = useSWR(`tv/airing_today`);
  const { data: onTheAir } = useSWR(`tv/on_the_air`);
  const { data: popular } = useSWR(`tv/popular`);
  const { data: topRated } = useSWR(`tv/top_rated`);

  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <TitleWithMoreButton href="/tv/airing-today" title="Airing Today" />
          <MovieListScrolling mediaType="tv" data={airingToday} genres={tvGenres} />
          <div className="mt-12">
            <TitleWithMoreButton href="/tv/on-the-air" title="On the air" />
            <MovieListScrolling mediaType="tv" data={onTheAir} genres={tvGenres} />
          </div>
          <div className="mt-12">
            <TitleWithMoreButton href="/tv/popular" title="Popular" />
            <MovieListScrolling mediaType="tv" data={popular} genres={tvGenres} />
          </div>
          <div className="mt-12">
            <TitleWithMoreButton href="/tv/top-rated" title="Top Rated" />
            <MovieListScrolling mediaType="tv" data={topRated} genres={tvGenres} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TvPage;
