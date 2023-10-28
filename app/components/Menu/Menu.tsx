'use client'
import { RefObject, useRef, useState } from 'react'
import cn from "classnames"

import { ExtraClassNames } from "@/app/types/types";
import { Cart } from "../Cart/Cart";
import { Logo } from "../Logo/Logo";
import { SearchForm } from "../SearchForm/SearchForm";
import { SubPages } from "../SubPages/SubPages";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { Categories } from "./Categories";

type Props = {
  className?: ExtraClassNames,
  handleCartClick: () => void,
  isCartHidden: boolean,
  cartELement: RefObject<HTMLDivElement>,
}

export const Menu = ({
  className,
  handleCartClick,
  isCartHidden,
  cartELement
}: Props) => {
  return (
    <div
      className={cn(
        'absolute', 'z-10', 'w-full',
        className === ExtraClassNames.TRANSPARENT && 'lg:absolute',
      )}
    >
      <section className={cn(
        'section', 'm-auto', 'px-[5%]', 'hidden', 'lg:block',
        className === ExtraClassNames.TRANSPARENT
          ? 'text-white'
          : 'text-black'
      )}>
        <nav className="nav section__nav flex justify-between p-5">
          <Logo classNames={ExtraClassNames.TRANSPARENT} />
          <SearchForm />
          <div className="flex flex-col">
            <SubPages />

            <ul className="nav__middle-icons flex justify-end gap-4">
              <UserIcon className={ExtraClassNames.TRANSPARENT} />
              <CartIcon
                className={ExtraClassNames.TRANSPARENT}
                handleCartClick={handleCartClick}
              />
            </ul>
          </div>
        </nav>
        <Categories />
      </section>
      <section className="mobile-menu lg:hidden w-full sticky top-0 left-0">
        <ul className="flex justify-between">
          <li>
            <button className="mobile-menu__stripes w-5 h-5"></button>
          </li>
          <Logo classNames={ExtraClassNames.TRANSPARENT} />
          <li>aef</li>
        </ul>
      </section>
      <Cart
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div>
  )
}
