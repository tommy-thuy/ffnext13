import { ReactNode } from 'react'

type CardContainerProps = {
  children: ReactNode
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <article className="flex w-full min-w-[19em] h-[400px] flex-col items-center justify-between rounded-lg border border-zinc-800 py-6 transition-all ease-in-out hover:border-yellow-400 hover:bg-backgroundShadow">
      {children}
    </article>
  )
}

export default CardContainer
