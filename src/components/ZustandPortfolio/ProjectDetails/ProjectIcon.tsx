'use client'

import { useCallback } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'

const ProjectCloseIcon = () => {
  const router = useRouter()

  const backPage = useCallback(() => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.replace('/zustand-portfolio/projects')
    }
  }, [router])

  return (
    <RiCloseFill
      onClick={backPage}
      className="absolute -right-4 -top-2.5 h-8 w-8 cursor-pointer rounded-full bg-yellow-500 text-yellow-400 transition-all ease-in hover:bg-blue-700 hover:text-bl"
    />
  )
}

export default ProjectCloseIcon
