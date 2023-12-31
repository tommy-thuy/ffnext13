import Link from 'next/link'
import { RouteLinksProps } from '@/types'
import { usePathname } from 'next/navigation'

const RouteLinks = (props: RouteLinksProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link
      className={`${
        props.onClick
          ? 'text-2xl text-white'
          : `text-base hover:text-textPrimary ${
              isActive ? 'text-textPrimary' : 'text-white'
            }`
      } font-bold transition-all ease-in
            `}
      href={props.href}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  )
}

export default RouteLinks
