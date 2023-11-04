import Image from 'next/image'
import error from '@/components/ZustandPortfolio/assets/error.png'

const NotFoundPage = () => {
  return (
    <section className="flex h-[90vh] w-full flex-col items-center justify-center bg-transparent px-24 py-0">
      <figure className="flex h-52 w-52 items-center justify-center">
        <Image
          className="h-full w-full"
          src={error}
          alt={'error-image'}
          width={1000}
          height={1000}
          priority
        />
      </figure>
      <h1 className="mt-8 text-center text-5xl text-white">
      Page not found!
      </h1>
    </section>
  )
}

export default NotFoundPage
