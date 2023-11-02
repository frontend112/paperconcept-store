import { ChangeEvent, FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { ProductType } from "@/app/types/types";
import Image from "next/image";

export const SearchForm = () => {
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
    <>
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
          className="
          search__input
          pl-6 pb-1.5
          bg-transparent
          border-b-2
          outline-none
          border-white
          hover:border-black
          placeholder:text-inherit
        "
          id="search"
          placeholder="Szukaj produktu"
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
      </form>
      {foundProducts.length > 0 && (
        <div className="absolute top-full
          lg:left-1/2 lg:translate-x-[-50%] lg:w-4/5
        bg-white text-black w-screen z-10">
          <div className="relative border-solid border-2">
            <ul className="grid grid-cols-4 gap-4">{foundProducts.map(({
              id,
              name,
              price,
              src
            }) =>
              <li key={id}>
                <div>
                  <Image width={140} height={140} alt="product" src={src} />
                </div>
                <p>{name}</p>
                <p>{price} zł</p>
              </li>
            )}</ul>
            <button className="absolute right-4 top-4" onClick={clearFoundProducts}>x</button>
          </div>
        </div>
      )}
    </>

  )
}
