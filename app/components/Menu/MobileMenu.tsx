import cn from 'classnames'
import { Logo } from "../Logo/Logo"

import { getCategories as categories } from "@/app/getData/getCategories"
import { RefObject, useRef } from "react"
import Link from "next/link";

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
    <section className="mobile-menu lg:hidden w-full sticky top-0 left-0 text-black">
      <ul className="flex justify-between">
        <li>
          <button className="mobile-menu__stripes w-5 h-5" onClick={toggleMenu} />
        </li>
        <Logo />
        <li>aef</li>
      </ul>
      <section className="hidden absolute left-0 top-0 w-full" ref={categoriesElement}>
        <div className="text-right bg-white">
          <h3 className="uppercase text-center">menu</h3>
          <button onClick={toggleMenu} className="text-xl absolute top-0 right-5">x</button>
          <hr />
        </div>
        <ul className=" text-black bg-white">{categories.map(({ category, id, slug }) => (
          <li key={id}><Link href={`/category/${slug}`}>{category}</Link></li>
        ))}</ul>
      </section>
    </section>
  )
}
