import cn from 'classnames'
import { Logo } from "../Logo/Logo"

import { getCategories as categories } from "@/app/getData/getCategories"
import { RefObject, useRef } from "react"
import Link from "next/link";
import { SubPages } from "../SubPages/SubPages";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UserIcon } from "./UserIcon";
import CartIcon from "./CartIcon";
import { Cart } from "../Cart/Cart";

interface Props {
  isCartHidden: boolean;
  cartELement: RefObject<HTMLDivElement>
  handleCartClick: () => void;
}

export const MobileMenu = ({
  isCartHidden,
  cartELement,
  handleCartClick,
}: Props) => {
  const categoriesElement = useRef<HTMLElement>(null);
  const toggleMenu = () => {
    categoriesElement.current?.classList.toggle('hidden')
  }
  return (
    <div className="mobile-menu lg:hidden w-full sticky top-0 left-0 text-black px-4 capitalize font-light opacity-90">
      <section className="flex justify-between">
        <div>
          <button className="mobile-menu__stripes w-5 h-5" onClick={toggleMenu} />
        </div>
        <div><Logo /></div>
        <div className="flex">
          <FontAwesomeIcon icon={faSearch} />
          <UserIcon />
          <CartIcon handleCartClick={handleCartClick} />
          {/* <Image src={}/> */}
        </div>
      </section>
      <section
        className="hidden absolute left-0 top-0 w-full"
        ref={categoriesElement}>
        <div className="text-right bg-white relative">
          <h3 className="uppercase text-center p-4">menu</h3>
          <button onClick={toggleMenu} className="absolute top-1/2 right-4 translate-y-[-50%] text-xl">x</button>
        </div>
        <hr />
        <ul className="text-black bg-white py-4">{categories.map(({ category, id, slug }) => (
          <li className="category p-4 relative" key={id}><Link className="category__link p-4 text-slate-700 hover:text-slate-900" href={`/category/${slug}`}>{category}</Link></li>
        ))}</ul>
        <hr />
        <SubPages isMobile={true} />
      </section>
      <Cart
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div>
  )
}
