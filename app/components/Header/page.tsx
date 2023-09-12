'use client'

import Image from "next/image"
import React from 'react'
import logoWhite from "../../img/pc-logo-mono-white.png";
import categoriesJson from "@/databases/categories.json";
import cn from "classnames";

const backgroundLength = 4;

const Header = () => {
  const categories = categoriesJson[2].data || [];
  return (
    <header className={cn(
      `bg-1`,
      'bg-malarski',
      'min-h-screen',
      'bg-cover',
      'bg-center',
      'relative'
    )}>
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
      <Arrow direction="left" />
      <Arrow direction="right" />
    </header>
  )
}

export default Header

const Arrow = ({ direction }: { direction: "right" | "left" }) => (
  <div className={cn(
    'px-5',
    'rounded-full',
    'absolute',
    'top-[50%]',
    'hover: cursor-pointer',
    direction === 'left' ? 'left-0' : 'right-0'
  )}
  >
    <i className={cn(
      'border-solid',
      'border-r-8',
      'border-b-8',
      'inline-block',
      'p-3',
      'border-black',
      direction === 'left' ? 'rotate-[135deg]' : 'rotate-[-45deg]'
    )}></i>
  </div>
)

