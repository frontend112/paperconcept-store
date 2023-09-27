// import data from "@/databases/categories.json"
'use client'

import { useState } from 'react'
import cn from "classnames";

import { Menu } from "./components/Menu/Menu";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";
import { DIRECTIONS } from "./types/types";
import { Arrow } from "./components/Arrow/Arrow";

const backgroundLength = 5;

const Main = () => {
  const [bgCount, setBgcount] = useState(0);
  const [isLoading, setIsLoading] = useState(false)

  const changeBg = (direction: DIRECTIONS) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
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
    }, 200)
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
        <Backgrounds bgCount={bgCount} />
        <Arrow direction={DIRECTIONS.LEFT} changeBg={changeBg} isLoading={isLoading} />
        <Arrow direction={DIRECTIONS.RIGHT} changeBg={changeBg} isLoading={isLoading} />
      </header>
    </main>
  )
}

export default Main;
