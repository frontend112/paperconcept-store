import Image from "next/image";
import cn from "classnames";

import { BackgroundsProps, DIRECTIONS } from "@/app/types/types";
import { bgImages } from "./bgImages";

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
      <div>
        <Image
          alt="background"
          src={bgImages[prevImage].src}
          layout="fill"
          className={cn(
            'brightness-75',
            'absolute',
            'object-cover',
            "translate-x-[-100vw]",
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-first-image',
          )}
        />
      </div>

      <div>
        <Image
          alt="background"
          src={bgImages[bgCount].src}
          layout="fill"
          className={cn(
            'brightness-75',
            'absolute',
            'object-cover',
            isActive && direction === DIRECTIONS.LEFT && 'animate-sliding-right-second-image',
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-second-image',
          )}
        />
        <section className="absolute bottom-10 left-[5%] z-10">
          <h2 className="uppercase text-white py-4 text-4xl font-light">{bgImages[bgCount].name}</h2>
          <a href={`/category/${bgImages[bgCount].slug}`} className="
            w-72
            bg-white
            px-3
            py-2
            block
            text-center
            tracking-wider
            font-medium
            hover:font-bold
            hover:tracking-[0.04em]
          ">Zobacz produkty</a>
        </section>
      </div>

      <div>
        <Image
          alt="background"
          src={bgImages[nextImage].src}
          layout="fill"
          className={cn(
            'brightness-75',
            'absolute',
            'object-cover',
            "translate-x-[100vw]",
            isActive && direction === DIRECTIONS.RIGHT && 'animate-sliding-left-third-image',
          )}
        />
      </div>
    </>
  )
}
