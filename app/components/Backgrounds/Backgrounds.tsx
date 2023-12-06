import Image from "next/image";
import cn from "classnames";

import { BackgroundsProps, DIRECTIONS } from "@/app/types/types";
import { bgImages } from "./bgImages";
import Link from "next/link";

export const Backgrounds = ({
  bgCount,
  animationsDetails: { direction, isActive },
}: BackgroundsProps) => {
  const prevImage = bgCount <= 0 ? bgImages.length - 1 : bgCount - 1;
  const nextImage = bgCount >= bgImages.length - 1 ? 0 : bgCount + 1;

  return (
    <>
      <Image
        alt="background"
        src={bgImages[prevImage].src}
        fill
        className={cn(
          "brightness-75",
          "absolute",
          "object-cover",
          "translate-x-[-100vw]",
          isActive &&
            direction === DIRECTIONS.LEFT &&
            "animate-sliding-right-first-image"
        )}
      />

      <Image
        alt="background"
        src={bgImages[bgCount].src}
        fill
        className={cn(
          "brightness-75",
          "absolute",
          "object-cover",
          isActive &&
            direction === DIRECTIONS.LEFT &&
            "animate-sliding-right-second-image",
          isActive &&
            direction === DIRECTIONS.RIGHT &&
            "animate-sliding-left-second-image"
        )}
      />
      <section className={cn("absolute", "bottom-10", "left-[5%]")}>
        <h2 className="uppercase text-white py-4 text-4xl font-light">
          {bgImages[bgCount].name}
        </h2>
        <Link
          href={`/category/${bgImages[bgCount].slug}`}
          className="
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
          "
        >
          Zobacz produkty
        </Link>
      </section>

      <Image
        alt="background"
        src={bgImages[nextImage].src}
        fill
        className={cn(
          "brightness-75",
          "absolute",
          "object-cover",
          "translate-x-[100vw]",
          isActive &&
            direction === DIRECTIONS.RIGHT &&
            "animate-sliding-left-third-image"
        )}
      />
    </>
  );
};
