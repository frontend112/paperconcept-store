'use client'
import { FormEvent } from 'react'
import Link from "next/link";
import cn from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import categoriesJson from "@/app/databases/categories.json"
import subpagesJson from "@/app/databases/subpages.json"

export const Menu = ({ extraClassName }: { extraClassName?: string, }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    console.log('submitted')
  }

  const categories = categoriesJson[2].data || [];
  const subpages = subpagesJson[2].data || [];

  return (
    <div className={cn(
      'z-10',
      'w-full',
      extraClassName === 'transparent' && 'absolute',
    )}>
      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className={cn(
        'section',
        'm-auto',
        'px-[5%]',
        extraClassName === 'transparent'
          ? 'text-white'
          : 'text-black'
      )}>
        <nav className="nav section__nav flex justify-between p-5">
          <div className="nav__logo-wrapper w-28 h-10">
            <Link
              className={cn(
                'w-28',
                'h-10',
                'block',
                'bg-cover',
                'bg-no-repeat',
                extraClassName === 'transparent' ? 'nav__logo' : 'nav__logo--transparent'
              )}
              href="/"
            ></Link>
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
                search__input
                bg-transparent
                white
                placeholder:text-inherit
                outline-none
                border-b-2
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
            {
              subpages.map(({ id, name, slug }) => (
                <li key={id}>
                  <Link href={`/${slug}`} className="px-1.5 py-2">{name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <ul className="flex justify-between text-inherit">
          {categories.map(({ category, id, slug }) => (
            <li key={id}>
              <Link href={`/category/${slug}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
