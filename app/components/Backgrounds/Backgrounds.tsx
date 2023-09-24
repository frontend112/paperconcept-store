import Image from "next/image"
import React from 'react'
import cn from 'classnames';

import bg1 from '@/app/img/background1.jpg'
import bg2 from '@/app/img/background2.jpg'
import bg3 from '@/app/img/background3.jpg'
import bg4 from '@/app/img/background4.jpg'
import bg5 from '@/app/img/background5.jpg'

const backgrounds = [
  { id: 1, src: bg1 },
  { id: 2, src: bg2 },
  { id: 3, src: bg3 },
  { id: 4, src: bg4 },
  { id: 5, src: bg5 },
]

export const Backgrounds = ({ bgCount }: { bgCount: number }) => {
  const prevImage = bgCount === 0 ? backgrounds.length - 1 : bgCount - 1;
  const nextImage = bgCount === backgrounds.length - 1 ? 0 : bgCount + 1;
  return (
    <>
      <Image
        alt="background"
        src={backgrounds[prevImage].src}
        layout="fill"
        objectFit="cover"
        className="absolute translate-x-[-100vw] delay-1000"
      />

      <Image
        alt="background"
        src={backgrounds[bgCount].src}
        layout="fill"
        objectFit="cover"
        className="absolute w-full delay-1000"
      />

      <Image
        alt="background"
        src={backgrounds[nextImage].src}
        layout="fill"
        objectFit="cover"
        className="absolute translate-x-[100vw] delay-1000"
      />
    </>

  )
}
