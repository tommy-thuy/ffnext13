import Link from 'next/link';
import React from 'react';
import MovieCard, { IMovieCard } from '../MovieCard';

const PopularMovies = ({ popularMovies }: { popularMovies: any }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="w-[1330px] max-w-full mx-auto flex justify-between items-center mt-10 mb-4 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8">
        <h2 className="text-2xl font-medium">Popular Movies</h2>
        <Link href="/none-cache-movies/popular" className="py-2 px-5 bg-slate-800 text-md font-normal text-white">
          See all
        </Link>
      </div>
      <div className="w-[1330px] max-w-full mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  
        mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 gap-5"
        >
          {popularMovies.results.slice(0, 4).map((movie: IMovieCard) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
