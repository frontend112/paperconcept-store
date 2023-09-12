'use client'

import Image from "next/image"
import React, { FC, useState } from 'react'
import logoWhite from "../../img/pc-logo-mono-white.png";
import categoriesJson from "@/databases/categories.json";
import cn from "classnames";

const backgroundLength = 4;

enum directions {
  left = 'left',
  right = 'right',
}

const Header = () => {
  const categories = categoriesJson[2].data || [];

  const [bgCount, setBgcount] = useState(1);

  const changeBg = (direction: directions) => {
    if (direction === directions.left && bgCount <= 1) {
      setBgcount(backgroundLength);
      return;
    }
    if (direction === directions.right && bgCount === backgroundLength) {
      setBgcount(1);
      return;
    }

    if (direction === directions.left) {
      setBgcount(count => count - 1);
    }
    if (direction === directions.right) {
      setBgcount(count => count + 1);
    }
  }

  return (
    <header
      className={cn(
        `bg-${bgCount}`,
        'min-h-screen',
        'bg-cover',
        'bg-center',
        'relative',
      )}
    >
      <p className="p-2 f-size text-sm text-center text-white bg-black sticky">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className="max-w-[90vw] m-auto">
        <nav className="flex text-white justify-between w-full">
          <div>
            <Image
              alt="logo"
              src={logoWhite}
              width="110"
              height="40"
            />
          </div>
          <form >
            <label />
            <input
              type="text"
              placeholder="Szukaj produktu"
              className="white bg-transparent placeholder:text-white outline-none" />
          </form>
          <ul className="flex uppercase">
            <li>karta podarunkowa</li>
            <li>nasze sklepy</li>
            <li>blog</li>
            <li>faq</li>
            <li>o nas</li>
            <li>kontakt</li>
          </ul>
        </nav>
        <ul className="flex text-white justify-between">
          {categories.map(({ category, id }) => (
            <li key={id}>{category}</li>
          ))}
        </ul>
      </section>
      <Arrow direction={directions.left} changeBg={changeBg} />
      <Arrow direction={directions.right} changeBg={changeBg} />
    </header>
  )
}

export default Header

interface ArrowProps {
  direction: directions;
  changeBg: (direction: directions) => void;
}

const Arrow: FC<ArrowProps> = ({ direction, changeBg }) => (
  <div className={cn(
    'px-5',
    'rounded-full',
    'absolute',
    'top-[50%]',
    'hover: cursor-pointer',
    direction === directions.left ? 'left-0' : 'right-0'
  )}
  >
    <button
      className={cn(
        'border-solid',
        'border-r-8',
        'border-b-8',
        'inline-block',
        'p-3',
        'border-black',
        direction === directions.left ? 'rotate-[135deg]' : 'rotate-[-45deg]'
      )}
      onClick={() => changeBg(direction)}
    />
  </div>
)
