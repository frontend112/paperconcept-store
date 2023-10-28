'use client'

import { useRef, useState } from 'react'
import cn from "classnames";

import { DIRECTIONS, ExtraClassNames } from "./types/types";
import { bgImages } from "./components/Backgrounds/bgImages";
import { Menu } from "./components/Menu/Menu";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { Arrow } from "./components/Arrow/Arrow";
import { Recommended } from "./components/Recommended/Recommended";
import { StickyMenu } from "./components/StickyMenu/StickyMenu";
import { Cart } from "./components/Cart/Cart";

const Main = () => {
  const [bgCount, setBgcount] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [animationsDetails, setAnimationsDetails] = useState({ direction: DIRECTIONS.UNKNOWN, isActive: false })

  const mainELement = useRef<HTMLElement>(null)
  const [isScrolled, setIsscrolled] = useState(false)

  const changeBg = (direction: DIRECTIONS) => {
    setIsLoading(true);
    setAnimationsDetails({ direction, isActive: true })

    setTimeout(() => {
      setIsLoading(false)
      setAnimationsDetails({ direction, isActive: false })

      if (direction === DIRECTIONS.LEFT && bgCount <= 0) {
        setBgcount(bgImages.length - 1);
        return;
      }
      if (direction === DIRECTIONS.RIGHT && bgCount >= bgImages.length - 1) {
        setBgcount(0);
        return;
      }
      if (direction === DIRECTIONS.LEFT) {
        setBgcount(count => count - 1);
      }
      if (direction === DIRECTIONS.RIGHT) {
        setBgcount(count => count + 1);
      }
    }, 500)
  }

  const handleScroll = () => {
    const scrollTop = mainELement.current?.scrollTop || 0;
    console.log(scrollTop)
    scrollTop > 160 ? setIsscrolled(true) : setIsscrolled(false)
  }

  return (
    <main
      ref={mainELement}
      onScroll={handleScroll}
      className="h-screen overflow-scroll"
    >
      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <header className={cn(
        'header',
        'relative',
        'w-full',
        'overflow-hidden',
        'bg-cover',
        'bg-center',
      )}
      >
        {isScrolled ? <StickyMenu />
          : <Menu
            className={ExtraClassNames.TRANSPARENT}
          />
        }

        <Backgrounds bgCount={bgCount} animationsDetails={animationsDetails} />

        <Arrow
          direction={DIRECTIONS.LEFT}
          handleArrowClick={changeBg}
          isLoading={isLoading}
        >&lt;</Arrow>

        <Arrow
          direction={DIRECTIONS.RIGHT}
          handleArrowClick={changeBg}
          isLoading={isLoading}
        >&gt;</Arrow>
      </header>
      <section className="flex flex-col">
        <article>
          <h1>PaperConcept to sklep plastyczny pełen produktów najlepszych marek</h1>
        </article>
        <article>
          <h3>Polecane produkty:</h3>
          <div>
            <Recommended />
          </div>
        </article>
      </section>
      <footer>
        footer
      </footer>
    </main>
  )
}

export default Main;
