'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import cn from "classnames"

import { ExtraClassNames, ProductType } from "@/app/types/types";
import { Cart } from "../Cart/Cart";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";
import { getProductsByInput } from "@/app/getData/getProductsByInput";

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

  const [searchInput, setSearchinput] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    // add searching with bit delay on typing with
  }

  const [foundProducts, setFoundproducts] = useState<ProductType[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchinput(value);
    value ? setFoundproducts(getProductsByInput(e.target.value))
      : setFoundproducts([])
  }
  const clearFoundProducts = () => {
    setFoundproducts([])
    setSearchinput('')
  }

  return (
    <div
      className={cn(
        'z-10', 'w-full', 'absolute',
        className === ExtraClassNames.TRANSPARENT && 'text-white'
      )}
    >
      <DesktopMenu
        handleCartClick={handleCartClick}
        className={className}
        searchInput={searchInput}
        handleSubmit={handleSubmit}
        foundProducts={foundProducts}
        handleChange={handleChange}
        clearFoundProducts={clearFoundProducts}
      />

      <MobileMenu
        handleCartClick={handleCartClick}
        className={className}
        searchInput={searchInput}
        handleSubmit={handleSubmit}
        foundProducts={foundProducts}
        handleChange={handleChange}
        clearFoundProducts={clearFoundProducts}
      />

      <Cart
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div >
  )
}
