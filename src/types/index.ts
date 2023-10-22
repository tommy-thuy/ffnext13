export type MediaType = 'movie' | 'tv';

export interface Genre {
  id: number;
  name: string;
}

export interface GenresList {
  genres: Genre[];
}

export interface Movie extends GenresList {
  id: number;
  title: string;
  name: string;
  original_title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  media_type: string;
  runtime: number;
  genre_ids: Genre[] | number[];
}

export interface Results {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Cast {
  id: number;
  credit_id?: number;
  name: string;
  profile_path: string;
}

export interface Crew {
  job: string;
  name: string;
  credit_id: number;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Details extends Movie {
  directors: Crew[];
  actors: Cast[];
}



export type Content = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  name?: string
  first_air_date?: string
  last_air_date?: string
  genres?: [{ id: number, name: string }]
  homepage?: string
  imdb_id?: string
  revenue?: number
  budget?: number
  runtime?: number
  tagline?: string
  number_of_episodes?: number
  number_of_seasons?: number
}