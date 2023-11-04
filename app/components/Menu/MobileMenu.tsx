'use client'
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import Link from "next/link";

import { MenuDevicesProps, ProductType } from "@/app/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCategories as categories } from "@/app/getData/getCategories"
import { Logo } from "../Logo/Logo"
import { SubPages } from "../SubPages/SubPages";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { FoundedProducts } from "../FoundedProducts/FoundedProducts";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { getProductsByInput } from "@/app/getData/getProductsByInput";

export const MobileMenu = ({
  handleCartClick,
  className,
}: MenuDevicesProps) => {
  const categoriesElement = useRef<HTMLElement>(null);
  const formElement = useRef<HTMLFormElement>(null);

  const toggleMenu = () => {
    categoriesElement.current?.classList.toggle('hidden')
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
    <div className="mobile-menu lg:hidden w-full sticky top-0 left-0 text-black capitalize font-light opacity-90 lg:p-4">
      <section className="flex justify-between items-center">
        <div>
          <button className="mobile-menu__stripes w-5 h-5" onClick={toggleMenu} />
        </div>
        <div><Logo /></div>
        <ul className="flex gap-4 pr-4">
          <SearchIcon formElement={formElement} />
          <UserIcon />
          <CartIcon handleCartClick={handleCartClick} />
        </ul>
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
      <form
        className="hidden mobile-form font-semibold"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        <label
          className="absolute z-10 right-4 top-[200%] translate-y-[-100%] cursor-pointer"
          htmlFor="mobile-search">
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input className="mobile-form__input w-screen absolute left-0 top-full p-4 text-black" placeholder="Szukaj produktu" type="text" value={searchInput} onChange={handleChange} id="mobile-search" />
      </form>
      <FoundedProducts
        foundProducts={foundProducts}
        clearFoundProducts={clearFoundProducts}
      />
    </div>
  )
}
