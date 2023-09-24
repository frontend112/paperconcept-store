// import data from "@/databases/categories.json"
'use client'

import React, { FC, useState } from 'react'
import cn from "classnames";

import { Nav } from "./components/Nav/Nav";
import { Backgrounds } from "./components/Backgrounds/Backgrounds";

const backgroundLength = 5;

enum DIRECTIONS {
  LEFT,
  RIGHT
}

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
          'min-h-screen',
          'bg-cover',
          'bg-center',
          'max-h-[100vh]',
          'max-w-full',
          'overflow-hidden'
        )}
      >
        <Nav />
        <Backgrounds bgCount={bgCount} />
        <Arrow direction={DIRECTIONS.LEFT} changeBg={changeBg} isLoading={isLoading} />
        <Arrow direction={DIRECTIONS.RIGHT} changeBg={changeBg} isLoading={isLoading} />
      </header>
    </main>
  )
}

export default Main;

interface ArrowProps {
  direction: DIRECTIONS;
  changeBg: (direction: DIRECTIONS) => void;
  isLoading: boolean;
}

const Arrow: FC<ArrowProps> = ({ direction, changeBg, isLoading }) => (
  <div className={cn(
    'px-5',
    'rounded-full',
    'absolute',
    'top-[50%]',
    'hover: cursor-pointer',
    'translate-y-[-50%]',
    direction === DIRECTIONS.LEFT ? 'left-0' : 'right-0'
  )}
  >
    <button
      className={cn(
        'border-solid',
        'border-r-4',
        'border-b-4',
        'inline-block',
        'p-4',
        'border-black',
        direction === DIRECTIONS.LEFT ? 'rotate-[135deg]' : 'rotate-[-45deg]'
      )}
      disabled={isLoading}
      onClick={() => changeBg(direction)}
    />
  </div>
)
