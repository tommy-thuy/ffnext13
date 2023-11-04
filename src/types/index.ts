import { z } from 'zod'
import { ReactNode } from 'react'
import { contactSchema } from '@/zod'
import { StaticImageData } from 'next/image'

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




//Zustand store
export type ProjectsTypeProps = {
  id: string
  order: number
  project_name: string
  deploy_url: string
  banner_url: string
  thumbnail_url: string
  description: string
  techs: LinksTypeProps
}
export type SoftskillsTypeProps = {
  id: string
  softskill_name: string
}
export type SkillsTypeProps = {
  id: string
  skill_name: string
  svg_link: string
  description: string
}
export type ProfileProps = {
  id: string
  description_1: string
  description_2: string
}
export type ProfileResponse = {
  profile: ProfileProps[]
}
export type SkillsResponse = {
  skills: SkillsTypeProps[]
}
export type SoftskillsResponse = {
  softskills: SoftskillsTypeProps[]
}
export type ProjectsResponse = {
  projects: ProjectsTypeProps[]
}
export type ProjectResponse = ProjectsTypeProps
export interface ErrorMessageResponse extends Error {
  message: string
}

export type ContactProps = z.infer<typeof contactSchema>

export type APISkillsResponse = SkillsResponse | ErrorMessageResponse
export type APISoftskillsResponse = SoftskillsResponse | ErrorMessageResponse
export type APIProjectsResponse = ProjectsResponse | ErrorMessageResponse
export type APIProjectResponse = ProjectResponse | ErrorMessageResponse
export type APIProfileResponse = ProfileResponse | ErrorMessageResponse

export type ReactQueryProviderProps = {
  children: ReactNode
}

export type ContainerTypeProps = {
  children: React.ReactNode
}

export type ImageProps = {
  src: StaticImageData
  alt: string
  className?: string
}

export type MenuMobileTypeProps = {
  modal?: boolean
  openModal?: () => void
  closeModal?: () => void
}

export type RouteLinksProps = {
  text: string
  href: string
  onClick?: () => void
}

type UseStoreState = {
  status: {
    isDefault: boolean
    isHovered: boolean
    skillId: string
  }
}

type UseStoreActions = {
  setStatus: (skillId: string) => void
  clearStatus: () => void
}

export type UseStoreProps = UseStoreState & UseStoreActions

export type Container3DProps = {
  children: ReactNode
}

export type CanvaContainerProps = {
  children: ReactNode
}

export type ButtonContactFormProps = {
  loading: boolean
}
export type ProjectDetails = {
  id: string;
  count: number;
};

export type FavoritesProjectsProps = {
  projectsDetails: ProjectDetails[];
}

export type State = {
  favoritedProjects: FavoritesProjectsProps;
}

export type ActionsProps = {
  addToFavorite: (projectId: string) => void;
  removeFromFavorite: (projectId: string) => void;
}

export type ZustandUseStoreProps = State & ActionsProps;

export type FavoriteStarProps = {
  id: string;
}

export type LinkButtonProps = {
  text: string;
  href: string;
}


type LinksTypeProps = {
  links: TechsTypeProps[]
}

type TechsTypeProps = {
  id: string;
  svg_name: string;
  link: string;
  svg_link: string;
}

