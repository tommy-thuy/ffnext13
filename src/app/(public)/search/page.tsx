'use client';
import { useSearchParams, usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { useGenres } from '@/context/genres';
import { MediaType, Results } from '@/types';
import MovieItem from '@/components/MovieItem';
import LoadingMoviePlaceholder from '@/components/loading-placeholders/LoadingMoviePlaceholder';

const SearchPage = () => {
  const { movieGenres, tvGenres } = useGenres();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get('q');

  const { data } = useSWR<Results>(`search/multi?query=${search}`);

  const media: { [key in MediaType] } = {
    tv: movieGenres,
    movie: tvGenres
  };

  const results = data?.results?.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="flex">
      <div className="flex flex-col min-h-screen w-full ">
        <main className="flex-1 p-4 md:p-8">
          <div className="flex items-center justify-between my-5">
            <h1 className="text-xl flex items-center">Results for: {search}</h1>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            {results
              ? results.map((movie) => (
                  <React.Fragment key={movie?.id}>
                    {movie?.media_type !== 'person' ? (
                      <div className="flex-none p-3 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                        <Link href={`/${movie?.media_type}/${movie?.id}`}>
                          <MovieItem details={movie} genres={media[movie.media_type]} />
                        </Link>
                      </div>
                    ) : null}
                  </React.Fragment>
                ))
              : [...Array(5)].map((_, index) => (
                  <div key={index} className="flex-none p-1 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                    <LoadingMoviePlaceholder delay={index} />
                  </div>
                ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
