'use client'

import React from 'react'
import Image from 'next/image'
import { ImageProps } from '@/types'

const SkeletonImageProfile = ({ src, alt, className }: ImageProps) => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <figure className="rounded-xl">
      {sketelon && (
        <span className="bg-gradient-radial col-start-1 row-start-1 h-full animate-pulse rounded-full bg-yellow-600 bg-cover"></span>
      )}
      
      <div className='w-full h-full'>
      <Image 
        className={`ease w-full h-full object-cover rounded-xl opacity-0 transition-all bg-yellow-400 ${
          className && 'animate-fly'
        }`}
        onLoad={handleLoad}
        src={src}
        alt={alt}
        priority
      />
      </div>
    
    </figure>
  )
}

export default SkeletonImageProfile
