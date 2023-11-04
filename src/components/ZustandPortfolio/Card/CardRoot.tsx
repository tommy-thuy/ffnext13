import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@/types'
import { useRouter } from 'next/navigation'

type CardARootProps = {
  children: ReactNode
} & ProjectsTypeProps

const CardRoot = ({ children, ...props }: CardARootProps) => {
  const router = useRouter()

  const gotToProjectPage = () => {
    router.push(`zustand-portfolio/views/project/${props.id}`)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      className="w-full rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${props.banner_url})` }}
      onLoad={handleLoad}
      onClick={gotToProjectPage}
    >
      {children}
    </div>
  )
}

export default CardRoot
