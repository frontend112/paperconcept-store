import Image, { StaticImageData } from "next/image"
import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { BackgroundsProps, DIRECTIONS } from "@/app/types/types"
import { bgImages } from "./bgImages"

export const Backgrounds = (
  {
    bgCount,
    animationsDetails:
    {
      direction,
      isActive,
    }
  }: BackgroundsProps
) => {
  const prevImage = bgCount <= 0 ? bgImages.length - 1 : bgCount - 1;
  const nextImage = bgCount >= bgImages.length - 1 ? 0 : bgCount + 1;

  return (
    <>
      <div className={cn(
        (!isActive || direction === DIRECTIONS.RIGHT) && 'hidden',
      )}>
        <Image
          alt="background"
          src={bgImages[prevImage].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-first-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{bgImages[prevImage].name}</h2>
          <a href={`/category/${bgImages[prevImage].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>

      <div>
        <Image
          alt="background"
          src={bgImages[bgCount].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-second-image',
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-second-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{bgImages[bgCount].name}</h2>
          <a href={`/category/${bgImages[bgCount].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>

      <div className={cn(
        (!isActive || direction !== DIRECTIONS.RIGHT) && 'hidden',
      )}>
        <Image
          alt="background"
          src={bgImages[nextImage].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-third-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{bgImages[nextImage].name}</h2>
          <a href={`/category/${bgImages[nextImage].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>
    </>
  )
}
