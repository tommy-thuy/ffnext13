 
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IMovieCard {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: IMovieCard }) => {
  return (
    <Link href={`/movie/${movie?.id}`} className="w-full max-w-[18em]">
      <div className="w-full h-[400px] relative">
        <Image
          className='h-[18rem]'
          src={
            movie?.poster_path
              ? `${process.env.NEXT_IMAGE_URL}${movie?.poster_path}`
              : `${process.env.NEXT_EMPTY_MOVIE_URL}`
          }
          alt={movie?.title}
          fill={true}
        />
      </div>
      <div className="flex gap-4 justify-between items-center mt-3 bg-red">
        <h2 className="text-lg font-medium">{movie?.title}</h2>
        <span
          className={`flex flex-col p-2 text-white rounded-md ${
            movie?.vote_average < 5
              ? `bg-red-700`
              : movie?.vote_average == 5
              ? `bg-orange-700`
              : `bg-green-700`
          }`}
        >
          {movie?.vote_average}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;