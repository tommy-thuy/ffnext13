import { Container3DProps } from '@/types'

const Container3D = ({ children }: Container3DProps) => {
  return (
    <div className="bg-gradient-model flex cursor-grabbing ml-auto items-center justify-center overflow-hidden rounded-full shadow-xl shadow-zinc-950 h-96 w-96">
      {children}
    </div>
  )
}

export default Container3D
