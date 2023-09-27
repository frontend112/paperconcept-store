import Image, { StaticImageData } from "next/image"
import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import bg1 from '@/app/img/background1.jpg'
import bg2 from '@/app/img/background2.jpg'
import bg3 from '@/app/img/background3.jpg'
import bg4 from '@/app/img/background4.jpg'
import bg5 from '@/app/img/background5.jpg'
import { DIRECTIONS } from "@/app/types/types"

interface BackgroundType {
  id: number,
  src: StaticImageData,
  name: string,
  slug: string,
}

const backgrounds: BackgroundType[] = [
  {
    id: 1,
    src: bg1,
    name: 'artykuły plastyczne',
    slug: 'plastyczne',
  },
  {
    id: 2,
    src: bg2,
    name: 'podobrazia malarskie',
    slug: 'podobrazia',
  },
  {
    id: 3,
    src: bg3,
    name: 'koperty',
    slug: 'koperty'
  },
  {
    id: 4,
    src: bg4,
    name: 'farby akwarelowe',
    slug: 'farby',
  },
  {
    id: 5,
    src: bg5,
    name: 'artykuły piśmiennicze',
    slug: 'rysunek',
  },
]

enum backgroundPlaces {
  left,
  right,
}

export const Backgrounds = (
  { bgCount, animationsDetails: {
    direction, isActive,
  } }:
    {
      bgCount: number,
      animationsDetails:
      { direction: DIRECTIONS, isActive: boolean }
    }
) => {
  const prevImage = bgCount <= 0 ? backgrounds.length - 1 : bgCount - 1;
  const nextImage = bgCount >= backgrounds.length - 1 ? 0 : bgCount + 1;

  return (
    <>
      <div className={cn(
        (!isActive || direction === DIRECTIONS.RIGHT)
        && 'translate-x-[-100vw]',
      )}>
        <Image
          alt="background"
          src={backgrounds[prevImage].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-first-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{backgrounds[prevImage].name}</h2>
          <a href={`/category/${backgrounds[prevImage].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>

      <div>
        <Image
          alt="background"
          src={backgrounds[bgCount].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-second-image',
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-second-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{backgrounds[bgCount].name}</h2>
          <a href={`/category/${backgrounds[bgCount].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>

      <div className={cn(
        (!isActive || direction !== DIRECTIONS.RIGHT)
        && 'translate-x-[100vw]',
      )}>
        <Image
          alt="background"
          src={backgrounds[nextImage].src}
          layout="fill"
          className={cn(
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-third-image',
          )}
        />
        <section className="absolute bottom-5 left-[5%]">
          <h2 className="uppercase text-white">{backgrounds[nextImage].name}</h2>
          <a href={`/category/${backgrounds[nextImage].slug}`} className="text-white">Zobacz produkty</a>
        </section>
      </div>
    </>
  )
}
