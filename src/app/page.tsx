
import type { Metadata, ResolvingMetadata } from 'next';

import React, { useContext, useState } from 'react';

import UpcomingMovies from '@/components/MovieHomepage/UpcomingMovies';
import PopularMovies from '@/components/MovieHomepage/PopularMovies';
import TopRatedMovies from '@/components/MovieHomepage/TopRatedMovies';
import Container from '@/components/Container';

import ContentList from '@/components/ContentList';
import FilterSidebar from '@/components/FilterSidebar';
import { type Content } from '@/types';

async function getMoviesv2(type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_API_KEY}&language=en-US`
  );
  return res.json();
}

export const metadata: Metadata = {
  title: 'Movie Friends App 2023',
  description: 'Generated by create next app'
};

type FetchResult = {
  page: number;
  results: Content[];
  total_pages: number;
  total_results: number;
};

type SearchParams = {
  category: string;
  page: string;
  advance?: string;
  sortBy?: string;
  genres?: string;
  date?: string;
};

async function getMovies(searchParams: SearchParams): Promise<FetchResult> {
  const { category, page, advance, sortBy, genres, date } = searchParams;
  let url;
  if (!advance) {
    url = new URL(`https://api.themoviedb.org/3/movie/${category ?? 'popular'}`);
  } else {
    url = new URL(`https://api.themoviedb.org/3/discover/movie`);
    sortBy && url.searchParams.append('sort_by', sortBy);
    genres && url.searchParams.append('with_genres', genres);

    // TODO
    // date && url.searchParams.append('sortBy', date)
  }
  if (page) {
    url.searchParams.append('page', page);
  }
  url.searchParams.append('api_key', '1886afcba942e823d77e420019b69f52');

  return (await fetch(url)).json();
}

async function getGenres() {
  let url = new URL(`https://api.themoviedb.org/3/genre/movie/list`);
  url.searchParams.append('api_key', '1886afcba942e823d77e420019b69f52');

  return (await fetch(url)).json();
}

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  const data = await getMovies(searchParams);
  const genres = await getGenres();
 

  let { page } = searchParams;

  const popularMovies = await getMoviesv2('popular');
  const topRatedMovies = await getMoviesv2('top_rated');
  const upcomingMovies = await getMoviesv2('upcoming');

  if (!data.results) {
    return (
      <div className="flex">
        <div className="flex flex-col min-h-screen w-full">
          <main className="flex-1 p-4 md:p-8">
            <h1 className="text-2xl font-bold">No data found</h1>
            <p>check for broken links</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="mt-10">
        <Container>
          <div className="xl:gap-4 xl:grid xl:grid-cols-4">
            <div className="hidden xl:block xl:col-span-1">
              <FilterSidebar genres={genres.genres} />
            </div>
            <div className="overflow-y-auto xl:col-span-3">
              <ContentList content={data.results} curr_page={page ? Number.parseInt(page) : 1} />
            </div>
          </div>
        </Container>
      </main>

      <main className="mt-20 border-t border-gray-900 sm:border-gray-800">
       
          <UpcomingMovies upcomingMovies={upcomingMovies} />
          <PopularMovies popularMovies={popularMovies} />
          <TopRatedMovies topRatedMovies={topRatedMovies} />
       
      </main>
    </>
  );
}