'use client'
import { FormEvent, useRef, useState } from 'react'
import Link from "next/link";
import cn from "classnames"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCategories as categories } from '@/app/getData/getCategories'
import { getSubpages as subpages } from "@/app/getData/getSubpages";
import { ExtraClassnames } from "@/app/types/types";
import { Button } from "@/components/ui/button";
import { RootState } from "@/app/GlobalRedux/store";
import { useSelector } from "react-redux";

export const Menu = ({ extraClassName }: { extraClassName?: ExtraClassnames, }) => {
  const cartProducts = useSelector((state: RootState) => state.products)
  const totalPrice = cartProducts
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    // add searching with bit delay on typing with shadcn ui
  }

  const cartProductsquantity = cartProducts
    .map(product => product.quantity)
    .reduce((acc, current) => acc + current, 0)

  const [isCartHidden, setIscarthidden] = useState(true);

  const cartELement = useRef<HTMLDivElement>(null);

  const handleCartClick = () => {
    if (isCartHidden) {
      cartELement.current?.classList.add('animate-show-cart')
      cartELement.current?.classList.remove('animate-hide-cart')
    } else {
      cartELement.current?.classList.add('animate-hide-cart')
      cartELement.current?.classList.remove('animate-show-cart')
    }

    setTimeout(() => {
      setIscarthidden(state => !state)
    }, 500)
  }

  return (
    <div className={cn(
      'z-10',
      'w-full',
      extraClassName === ExtraClassnames.transparent && 'absolute',
    )}>
      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className={cn(
        'section',
        'm-auto',
        'px-[5%]',
        extraClassName === ExtraClassnames.transparent
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
                extraClassName === ExtraClassnames.transparent ? 'nav__logo' : 'nav__logo--transparent'
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
          <div className="flex flex-col">
            <ul className="flex uppercase text-[0.6rem] pb-4">
              {
                subpages.map(({ id, name, slug }) => (
                  <li key={id}>
                    <Link href={`/${slug}`} className="px-1.5 py-2">{name}</Link>
                  </li>
                ))
              }
            </ul>
            <ul className="flex justify-end gap-4">
              <li>
                <Link href='/user-panel' className=
                  {cn(
                    'nav__user',
                    extraClassName === ExtraClassnames.transparent && 'nav__user--transparent',
                    'w-5',
                    'h-5',
                    'block'
                  )}>
                </Link>
              </li>
              <li>
                <div
                  className={cn(
                    'nav__cart',
                    extraClassName === ExtraClassnames.transparent && 'nav__cart--transparent',
                    'w-5',
                    'h-5',
                    'block',
                    'relative'
                  )}
                  onClick={handleCartClick}
                >
                  <span className="absolute right-[-0.7rem] top-[-0.2rem] text-xs">{cartProductsquantity}</span>
                </div>
              </li>
            </ul>
          </div>
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

      <div className=
        {cn(
          'flex', 'flex-col', 'justify-between',
          'fixed', 'right-0', 'top-0', 'w-1/4', 'h-[100vh]',
          'bg-white text-center', 'overflow-scroll',
          isCartHidden && 'translate-x-full',
        )}
        ref={cartELement}
      >
        <article>
          <section className="relative p-4">
            <h3 className="uppercase">podgląd koszyka</h3>
            <button onClick={handleCartClick} className="absolute right-4 top-[50%] translate-y-[-50%] text-xl">x</button>
          </section>
          <hr />
          {cartProducts.length > 0 ? (
            <ul>
              {cartProducts.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          ) : (
            <h4 className="text-xs">Twój koszyk jest pusty.</h4>
          )}
        </article>
        <article>
          <hr />
          <section className="flex justify-between p-4">
            <span>Odbiór osobisty</span>
            <span className="text-blue-700">darmowy</span>
          </section>
          <section className="flex justify-between p-4">
            <strong>Razem:</strong>
            <strong>{totalPrice} zł</strong>
          </section>
          <section className="p-4">
            <Button className="w-full rounded-none">Przejdź do koszyka</Button>
          </section>
        </article>
      </div>
    </div>
  )
}
