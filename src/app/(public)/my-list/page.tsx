'use client';

import React from 'react';
import Link from 'next/link';

import { useGenres } from '@/context/genres';
import { useLocalStorage } from '@/hooks/useSWR';
import { Movie, MediaType } from '@/types';

import MovieItem from '@/components/MovieItem';

const MyListPage = () => {
  const { movieGenres, tvGenres } = useGenres();
  const [myList] = useLocalStorage<Movie[]>('myList', []);

  const genres: { [key in MediaType] } = {
    movie: movieGenres,
    tv: tvGenres
  };

  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between mt-5 mb-2">
            <h1 className="text-xl flex items-center">My List</h1>
          </div>
          <div className="flex flex-wrap -mx-3">
            {myList.map((movie) => (
              <React.Fragment key={movie?.id}>
                {movie?.media_type !== 'person' ? (
                  <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                    <Link href={`/${movie?.media_type}/${movie?.id}`}>
                      <MovieItem details={movie} genres={genres[movie?.media_type]} />
                    </Link>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyListPage;
