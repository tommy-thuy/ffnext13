import Link from 'next/link';
import React from 'react';
import MovieCard, { IMovieCard } from '../MovieCard';

const PopularMovies = ({ popularMovies }: { popularMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="w-[1276px] mx-auto flex justify-between items-center mt-4 mb-4">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
        <Link href="/movies/popular" className="py-2 px-5 bg-slate-800 text-md font-normal text-white">
          See all
        </Link>
      </div>
      <div className="w-[1330px] max-w-full px-4 mx-auto">
        <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3">
          {popularMovies.results.slice(0, 4).map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
