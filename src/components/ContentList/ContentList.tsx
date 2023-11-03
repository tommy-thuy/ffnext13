'use client'

import { type Content } from '@/types'
import Image from 'next/image'
import { BarChart2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

function ContentList({
  content,
  curr_page,
}: {
  content: Content[]
  curr_page: number
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const isLastPage = curr_page === 500
  const isFirstPage = curr_page === 1

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <section>
      <div className='grid grid-cols-2 justify-items-center gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-3'>
        {content.map((co) => (
          <Card key={co.id} content={co} />
        ))}
      </div>

      <div className='flex justify-center gap-4 mt-6 mb-6'>
        <Link
          href={pathname + '?' + createQueryString('page', `${curr_page - 1}`)}
        >
          <button
            disabled={isFirstPage}
            className='p-2 mt-4 w-32 rounded-md bg-indigo-600 hover:bg-indigo-500 text-gray-50 dark:text-gray-400 dark:bg-transparent ring-[2px] ring-gray-200/30 shadow disabled:bg-gray-300/20 disabled:cursor-not-allowed disabled:text-gray-300'
          >
            Prev
          </button>
        </Link>
        <Link
          href={pathname + '?' + createQueryString('page', `${curr_page + 1}`)}
        >
          <button
            disabled={isLastPage}
            className='p-2 mt-4 w-32 rounded-md bg-indigo-600 hover:bg-indigo-500 text-accent-foreground ring-[2px] ring-gray-200/30 shadow disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            Next
          </button>
        </Link>
      </div>
    </section>
  )
}

function Card({ content }: { content: Content }) {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    name,
    first_air_date,
  } = content
  const pathname = usePathname()
  let contentLink = `movie/${content.id}`
  return (
    <Link href={contentLink} className='w-full max-w-[18em]'>
      <div className='p-4 border-2 rounded-lg shadow-md w-full h-[380px] relative'>
      <div className='w-full h-[280px] relative'>
        {/* {!poster_path &&} */}
        {!poster_path &&    
          <Image layout="fill"        
            className='h-[10rem]'
            alt={`Poster of ${title}`} 
            src='/assets/images/the-movie-db-logo.svg'
            fill={true}
          />}
        {poster_path && (
          <Image
            layout="fill"         
            className='h-[10rem]'
            alt={`Poster of ${title}`} 
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            fill={true}
          />
        )}
         </div>
        <div className='flex flex-col justify-between w-full pt-2 h-[4.5rem] sm:h-16'>
          <h2 className='text-sm font-semibold leading-[.9rem] title-font text-primary_light line-clamp-1'>
            {name ? name : title}
          </h2>

          <div className='flex flex-col mt-1 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-2 text-xs text-gray-400 '>
              <BarChart2 className='w-5 h-4' />
              {vote_average} / 10
            </div>
            <p className='mt-1 text-xs text-gray-400 sm:mt-0'>
              {first_air_date ? first_air_date : release_date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ContentList