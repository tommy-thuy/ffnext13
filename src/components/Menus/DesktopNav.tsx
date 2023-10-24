"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";

const DesktopNav = () => {
  const { data: session } = useSession();

  return (
    <nav
      className={`hidden mx-auto max-w-5xl lg:flex justify-between items-center`}
    >      
      <div className="flex items-center cursor-pointer">
        {session ? (
          <>
            <div className="my-0 text-black  ">
              Signed in as {session.user?.email}
            </div>
            <div
              onClick={() => signOut()}
              className="bg-green-700 ml-6 my-0 rounded-md p-2 px-4 mx-2 text-white"
            >
              <BsPersonFill /> Logout
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="border-[1px] mx-4 min-w-[168px] w-full text-center py-[10px] px-8 text-sm font-medium  border-solid rounded-[24px] border-green-700">
              <Link href="/login">Log in</Link>
            </div>
            <div className="rounded-[24px] bg-indigo-600 hover:bg-indigo-500 hover:border-1 hover:text-white-700 hover:border-green-700 text-white font-medium text-sm shadow-button py-[10px] mx-4 min-w-[168px] w-full text-center">
              <Link href="/register">Register</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
