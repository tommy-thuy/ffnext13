'use client'

import Link from 'next/link'
import { ProjectsTypeProps } from '@/types'
import { FavoriteStar } from "../FavoriteStar"

const ProjectCard = (props: ProjectsTypeProps) => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <section
        className="relative mx-2 my-0 mt-8 h-96 w-60 rounded-lg bg-backgroundThird bg-cover bg-center md:mt-0"
        style={{ backgroundImage: `url(${props.banner_url})` }}
      >
        <FavoriteStar id={props.id} />
        <span className="flex h-full flex-col items-center justify-between rounded-lg border border-zinc-800 py-6 transition-all ease-in-out hover:border-textPrimary hover:bg-backgroundShadow"></span>
      </section>
    
      <h2 className="mt-2 text-center text-2xl font-bold text-white">
        {props.project_name}
      </h2>

      <Link
        className="mt-2 rounded-lg bg-blue-700 px-16 py-2 text-xl font-bold  transition-all hover:bg-yellow-500 hover:text-white"
        href={props.deploy_url}
        target="_blank"
      >
        Deploy
      </Link>
    </section>
  )
}

export default ProjectCard
