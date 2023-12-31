"use client";
import { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import Link from "next/link";

import { MenuDevicesProps, ProductType } from "@/app/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCategories as categories } from "@/app/getData/getCategories";
import { Logo } from "../Logo/Logo";
import { SubPages } from "../SubPages/SubPages";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { FoundedProducts } from "../FoundedProducts/FoundedProducts";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { useRouter } from "next/navigation";
import { ProductContext } from "@/app/ProductsProvider";

export const MobileMenu = ({
  handleCartClick,
  setIsarrowhidden,
}: MenuDevicesProps) => {
  const products = useContext(ProductContext);
  const categoriesElement = useRef<HTMLElement>(null);
  const formElement = useRef<HTMLFormElement>(null);
  const [searchInput, setSearchinput] = useState("");
  const [foundProducts, setFoundproducts] = useState<ProductType[]>([]);
  const router = useRouter();

  const toggleMenu = () => {
    categoriesElement.current?.classList.toggle("hidden");
    setIsarrowhidden((state) => !state);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/submit-search/${searchInput}`);
    clearFoundProducts();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchinput(value);
    value
      ? setFoundproducts(getProductsByInput(e.target.value, products))
      : setFoundproducts([]);
  };
  const clearFoundProducts = () => {
    setFoundproducts([]);
    setSearchinput("");
  };

  return (
    <div className="mobile-menu lg:hidden w-full top-0 left-0 text-black capitalize font-light opacity-90 lg:p-4 sm:px-8">
      <section className="flex justify-between items-center">
        <div>
          <button
            className="mobile-menu__stripes w-5 h-5"
            onClick={toggleMenu}
          />
        </div>
        <div>
          <Logo />
        </div>
        <ul className="flex gap-4 pr-4">
          <SearchIcon
            formElement={formElement}
            setIsArrowhidden={setIsarrowhidden}
          />
          <UserIcon />
          <CartIcon handleCartClick={handleCartClick} />
        </ul>
      </section>
      <section
        className="hidden absolute left-0 top-0 w-full"
        ref={categoriesElement}
      >
        <div className="text-right bg-white relative">
          <h3 className="uppercase text-center p-4">menu</h3>
          <button
            onClick={toggleMenu}
            className="absolute top-1/2 right-4 translate-y-[-50%] text-xl"
          >
            x
          </button>
        </div>
        <hr />
        <ul className="text-black bg-white py-4">
          {categories.map(({ category, id, slug }) => (
            <li className="category p-4 relative w-full" key={id}>
              <Link
                className="category__link p-4 text-slate-700 hover:text-slate-900 block"
                href={`/category/${slug}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <SubPages isMobile={true} />
      </section>
      <form
        className="hidden mobile-form font-semibold"
        ref={formElement}
        onSubmit={handleSubmit}
      >
        <label
          className="absolute right-4 top-[200%] translate-y-[-100%] cursor-pointer"
          htmlFor="mobile-search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input
          className="mobile-form__input w-screen absolute left-0 top-full p-4 text-black"
          placeholder="Szukaj produktu"
          type="text"
          value={searchInput}
          onChange={handleChange}
          id="mobile-search"
        />
      </form>
      <FoundedProducts
        foundProducts={foundProducts}
        clearFoundProducts={clearFoundProducts}
      />
    </div>
  );
};
