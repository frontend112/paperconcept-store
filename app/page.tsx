'use client'

import { useState } from 'react'
import cn from "classnames";

import { Menu } from "./components/Menu/Menu";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { DIRECTIONS } from "./types/types";
import { Arrow } from "./components/Arrow/Arrow";
import { Recommended } from "./components/Recommended/Recommended";

const backgroundLength = 5;

const Main = () => {
  const [bgCount, setBgcount] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [animationsDetails, setAnimationsDetails] = useState({ direction: DIRECTIONS.UNKNOWN, isActive: false })

  const changeBg = (direction: DIRECTIONS) => {
    setIsLoading(true);
    setAnimationsDetails({ direction, isActive: true })

    setTimeout(() => {
      setIsLoading(false)
      setAnimationsDetails({ direction, isActive: false })

      if (direction === DIRECTIONS.LEFT && bgCount <= 0) {
        setBgcount(backgroundLength - 1);
        return;
      }
      if (direction === DIRECTIONS.RIGHT && bgCount >= backgroundLength - 1) {
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

  return (
    <main>
      <header
        className={cn(
          'relative',
          'h-screen',
          'w-full',
          'bg-cover',
          'bg-center',
          'overflow-hidden'
        )}
      >
        <Menu extraClassName='transparent' />

        <Backgrounds bgCount={bgCount} animationsDetails={animationsDetails} />

        <Arrow
          direction={DIRECTIONS.LEFT}
          changeBg={changeBg}
          isLoading={isLoading}
        />

        <Arrow
          direction={DIRECTIONS.RIGHT}
          changeBg={changeBg}
          isLoading={isLoading}
        />
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

      </footer>
    </main>
  )
}

export default Main;
