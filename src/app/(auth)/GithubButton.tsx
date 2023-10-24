"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";

const GithubButton = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get("callbackUrl")!;

  if (callbackUrl === null) {
    callbackUrl = "/my/dashboard";
  }

  return (
    <p
      onClick={() => signIn("github", { callbackUrl })}
      className=" flex items-center justify-between pl-4 flex-1 text-black  cursor-pointer hover:bg-[#F5F5F5] hover:font-medium  bg-[#EAECEF] py-4 my-4 rounded-lg text-center"
    >
      <AiFillGithub
        size={20}
        className="align-text-top"
      />
      <span > Continue with Github</span>
      <span></span>
    </p>
  );
};

export default GithubButton;
