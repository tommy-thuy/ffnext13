'use client';
import Image from 'next/image';
import Container from '../Container';
import Link from 'next/link';
import { CalendarDays, ChevronDown, Menu, PartyPopper, Play, SearchIcon, Sun, TrendingUp, Tv } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../FilterSidebar/DropDown';
import MobileHeader from './MobileMenu';
import ThemeSwitcher from '../Footer/ThemeSwitcher';

import { useSession, signOut } from 'next-auth/react';
import { BsPersonFill } from 'react-icons/bs';

function Menus() {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center gap-8">
        <Link className="flex items-center text-2xl font-bold" href="/">
          <span className="inline-block px-[.5px] mt-2">
            <Image
              className="mx-auto h-10 w-auto"
              width={100}
              height={24}
              src="/assets/images/the-movie-db-logo.svg"
              alt=""
              priority
            />
          </span>
        </Link>
        <div className="items-center hidden gap-4 lg:flex">
          <div className="flex items-center gap-1">
            <p>Movies</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[10rem]">
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/popular`}>
                    <PartyPopper size={19} />
                    <span>Popular</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/now-playing`}>
                    <Play size={19} />
                    <span>Now Playing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/upcoming`}>
                    <CalendarDays size={19} />
                    <span>Upcoming</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/top-rated`}>
                    <TrendingUp size={19} />
                    <span>Top Rated</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1">
            <p>TV Shows</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[10rem]">
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/tv/popular`}>
                    <PartyPopper size={19} />
                    <span>Popular</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/tv/airing-today`}>
                    <Play size={19} />
                    <span>Airing Today</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/tv/on-the-air`}>
                    <Tv size={19} />
                    <span>On TV</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/tv/top-rated`}>
                    <TrendingUp size={19} />
                    <span>Top Rated</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1">
            <p>React Hooks</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[10rem]">
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/zustand-portfolio/projects`}>
                    <PartyPopper size={19} />
                    <span>Zustand</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/now-playing`}>
                    <Play size={19} />
                    <span>Redux Thunk</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/upcoming`}>
                    <CalendarDays size={19} />
                    <span>Redux Saga</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/top-rated`}>
                    <TrendingUp size={19} />
                    <span>Redux toolkit</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/top-rated`}>
                    <TrendingUp size={19} />
                    <span>Apollo Client</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/top-rated`}>
                    <TrendingUp size={19} />
                    <span>GraphQL API</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-1">
            <p>Rendering</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[10rem]">
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/`}>
                    <PartyPopper size={19} />
                    <span>CSR</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/now-playing`}>
                    <Play size={19} />
                    <span>SSR</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/upcoming`}>
                    <CalendarDays size={19} />
                    <span>SSG</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="text-base">
                  <Link className="flex items-center gap-3 cursor-pointer" href={`/movie/top-rated`}>
                    <TrendingUp size={19} />
                    <span>ISR</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
        </div>
      </div>
      <div className="hidden gap-6 lg:flex lg:items-center">
        <ThemeSwitcher />
        

        {/* {session ? (
          <>
            <div className="my-0 text-black  ">Signed in as {session.user?.email}</div>
            <div onClick={() => signOut()} className="bg-green-700 ml-6 my-0 rounded-md p-2  text-white">
              <BsPersonFill /> Logout
            </div>
          </>
        ) : (
          <>
            {' '}
            <div className="border-[1px] min-w-[168px] w-full text-center py-[10px] text-sm font-medium  border-solid rounded-[24px] border-green-700">
              <Link href="/login">Log in</Link>
            </div>
            <div className="rounded-[24px] bg-indigo-600 hover:bg-indigo-500 hover:border-1 hover:text-white-700 hover:border-green-700 text-white font-medium text-sm shadow-button py-[10px] min-w-[168px] w-full text-center">
              <Link href="/register">Register</Link>
            </div>
          </>
        )} */}
        {/* <Link href='/search'>
              <input
              type='text'
              placeholder='Search a Movie or TV'
              className='px-2 py-1 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-sm'
            /> 
              <SearchIcon
                className='duration-150 cursor-pointer hover:text-accent'
                size={22}
              />
            </Link> */}
      </div>

      <MobileHeader>
        <div className="lg:hidden">
          <Menu />
        </div>
      </MobileHeader>
    </nav>
  );
}

export default Menus;
