import React, { FormEvent } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import categoriesJson from "@/app/databases/categories.json"

export const Nav = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    console.log('submitted')
  }

  const categories = categoriesJson[2].data || [];

  return (
    <nav className="z-10 absolute w-full">

      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className="m-auto section">
        <div className="flex justify-between p-5 section__nav nav">
          <div className="nav__logo-wrapper">
            <Link href="/" className="nav__logo"></Link>
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
              <Link href='/nasze-sklepy' className="px-1.5 py-2 ">nasze sklepy</Link>
            </li>
            <li>
              <Link href='/blog' className="px-1.5 py-2 ">blog</Link>
            </li>
            <li>
              <Link href='/faq' className="px-1.5 py-2 ">faq</Link>
            </li>
            <li>
              <Link href='/o-nas' className="px-1.5 py-2 ">o nas</Link>
            </li>
            <li>
              <Link href='/kontakt' className="px-1.5 py-2 ">kontakt</Link>
            </li>
          </ul>
        </div>
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
    </nav>
  )
}
