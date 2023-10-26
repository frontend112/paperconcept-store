'use client'
import { useRef, useState } from 'react'
import cn from "classnames"

import { ExtraClassNames } from "@/app/types/types";
import { Cart } from "../Cart/Cart";
import { Logo } from "../Logo/Logo";
import { SearchForm } from "../SearchForm/SearchForm";
import { SubPages } from "../SubPages/SubPages";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { Categories } from "./Categories";

export const Menu = ({ className }: { className?: ExtraClassNames, }) => {
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
    <div
      className={cn(
        'z-10',
        'w-full',
        className === ExtraClassNames.TRANSPARENT && 'absolute',
      )}
    >
      <p className="p-2 text-xs text-center text-white bg-neutral-800">
        ZAMÓWIENIA OPŁACONE DO 12:00 WYSYŁAMY TEGO SAMEGO DNIA | DARMOWA DOSTAWA DO PACZKOMATU OD 100 ZŁ
      </p>
      <section className={cn(
        'section', 'm-auto', 'px-[5%]',
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

      <Cart
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div>
  )
}
