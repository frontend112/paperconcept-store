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
import { MobileMenu } from "./MobileMenu";

type Props = {
  className?: ExtraClassNames,
}

export const Menu = ({ className }: Props) => {
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
        'z-10', 'w-full', 'absolute',
        className === ExtraClassNames.TRANSPARENT && 'text-white'
      )}
    >
      {/* desktop */}
      <section className={cn(
        'section', 'm-auto', 'px-[5%]', 'hidden', 'lg:block', className === ExtraClassNames.TRANSPARENT && 'text-white',
      )}>
        <nav className="nav section__nav flex justify-between p-5">
          <Logo classNames={className} />
          <SearchForm />
          <div className="flex flex-col">
            <SubPages />

            <ul className="nav__middle-icons flex justify-end gap-4">
              <UserIcon className={className} />
              <CartIcon
                className={className}
                handleCartClick={handleCartClick}
              />
            </ul>
          </div>
          <Cart
            isCartHidden={isCartHidden}
            cartELement={cartELement}
            handleCartClick={handleCartClick}
          />
        </nav>
        <Categories />
      </section>

      {/* mobile */}
      <MobileMenu
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div >
  )
}
