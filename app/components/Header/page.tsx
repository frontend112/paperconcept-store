'use client'

import Image from "next/image"
import React, { FC, useState } from 'react'
import logoWhite from "../../img/pc-logo-mono.svg";
import categoriesJson from "@/databases/categories.json";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const backgroundLength = 5;

enum DIRECTIONS {
  LEFT,
  RIGHT
}

const Header = () => {
  const categories = categoriesJson[2].data || [];

  const [bgCount, setBgcount] = useState(1);

  const changeBg = (direction: DIRECTIONS) => {
    if (direction === DIRECTIONS.LEFT && bgCount <= 1) {
      setBgcount(backgroundLength);
      return;
    }
    if (direction === DIRECTIONS.RIGHT && bgCount === backgroundLength) {
      setBgcount(1);
      return;
    }
    if (direction === DIRECTIONS.LEFT) {
      setBgcount(count => count - 1);
    }
    if (direction === DIRECTIONS.RIGHT) {
      setBgcount(count => count + 1);
    }
  }

  const handleSubmit = () => {
    console.log('submitted')
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
      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className="m-auto section">
        <nav className="flex justify-between p-5 section__nav nav">
          <div className="nav__logo-wrapper">
            <span className="nav__logo"></span>
            {/* <Image
              alt="logo"
              src={logoWhite}
              width="110"
              height="40"
              style={{ color: "white" }}
            /> */}
          </div>
          <form className="relative" onSubmit={handleSubmit}>
            <label htmlFor="search">
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0.2rem",
                  height: "1rem",
                  cursor: "pointer",
                }}
              />
            </label>
            <input
              type="text"
              className="
                white
                bg-transparent
                placeholder:text-inherit
                outline-none
                border-b-2
                search__input
                pl-6
                pb-1.5
                border-white
                hover:border-black
              "
              id="search"
              placeholder="Szukaj produktu"
            />
          </form>
          <ul className="flex uppercase text-[0.6rem]">
            <li>
              <Link href='/' className="px-1.5 py-2 ">nasze sklepy</Link>
            </li>
            <li>
              <Link href='/' className="px-1.5 py-2 ">blog</Link>
            </li>
            <li>
              <Link href='/' className="px-1.5 py-2 ">faq</Link>
            </li>
            <li>
              <Link href='/' className="px-1.5 py-2 ">o nas</Link>
            </li>
            <li>
              <Link href='/' className="px-1.5 py-2 ">kontakt</Link>
            </li>
          </ul>
        </nav>
        <ul className="flex text-inherit justify-between">
          {categories.map(({ category, id }) => (
            <li key={id}>
              <Link href="/">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Arrow direction={DIRECTIONS.LEFT} changeBg={changeBg} />
      <Arrow direction={DIRECTIONS.RIGHT} changeBg={changeBg} />
    </header>
  )
}

export default Header

interface ArrowProps {
  direction: DIRECTIONS;
  changeBg: (direction: DIRECTIONS) => void;
}

const Arrow: FC<ArrowProps> = ({ direction, changeBg }) => (
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
      onClick={() => changeBg(direction)}
    />
  </div>
)
