'use client'

import {
  CalendarDays,
  PartyPopper,
  Play,
  SearchIcon,
  TrendingUp,
  Tv,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useState, ReactNode } from 'react'
import ThemeSwitcher from '../Footer/ThemeSwitcher'

import { signOut, useSession } from 'next-auth/react';
import { BsPersonFill } from 'react-icons/bs';

function MobileHeader({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { data: session } = useSession();
  function handleClose() {
    setOpen(false)
  }

  return (
    <div className='lg:hidden'>
      <button onClick={() => setOpen(!open)}>
        {!open && children}
        {open && <X />}
      </button>
      {open && (
        <div className='fixed animate-in duration-200 fade-in slide-in-from-top top-[80px] pb-4 left-0 w-full bg-background  backdrop-blur-sm'>
          <div className='px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 mt-2'>
            <h3 className='font-medium'>Movies</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/movie/popular`}
                >
                  <PartyPopper size={19} />
                  <span>Popular</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/movie/now-playing`}
                >
                  <Play size={19} />
                  <span>Now Playing</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/movie/upcoming`}
                >
                  <CalendarDays size={19} />
                  <span>Upcoming</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/movie/top-rated`}
                >
                  <TrendingUp size={19} />
                  <span>Top Rated</span>
                </Link>
              </p>
            </div>
          </div>
          <div className='px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 mt-4'>
            <h3 className='font-medium'>TV Shows</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer' 
                  href={`/tv/popular`}
                >
                  <PartyPopper size={19} />
                  <span>Popular</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/tv/airing-today`}
                >
                  <Play size={19} />
                  <span>Airing Today</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/tv/on-the-air`}
                >
                  <Tv size={19} />
                  <span>On TV</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3 cursor-pointer'
                  href={`/tv/top-rated`}
                >
                  <TrendingUp size={19} />
                  <span>Top Rated</span>
                </Link>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8  mt-6'>
            <ThemeSwitcher />            
          </div>
          <div className='flex items-center justify-between px-4 sm:px-4 md:px-4 lg:px-4 xl:px-8 mt-6'>
            {session ? (
              <>
                <p className="my-4 text-black  ">Signed in as {session.user?.email}</p>
                <p onClick={() => signOut()} className="bg-[#2c6e49] my-4 rounded-md p-2 px-4 mx-2 text-white">
                  <BsPersonFill /> Logout
                </p>
              </>
            ) : (
              <div>
                <p className="border-[1px] w-full my-4 text-center py-[10px] text-sm font-medium  border-solid rounded-[24px] px-6 border-green-700">
                  <Link href="/login">Log in</Link>
                </p>
                <p className="rounded-[24px] my-4 text-white font-medium text-sm shadow-button py-[10px] px-6 w-full text-center bg-green-700 ">
                  <Link href="/register">Register</Link>
                </p>
              </div>
            )}
            {/* <Link
              onClick={handleClose}
              href='/search'
              className='flex items-center float-right gap-3 md:hidden'
            >
              <input
                type='text'
                placeholder='Search a Movie or TV'
                className='w-full px-2 py-1 bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm'
              />
              Go to search
              <SearchIcon size={22} />
            </Link> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
