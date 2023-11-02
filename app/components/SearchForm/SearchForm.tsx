import { ChangeEvent, FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { MenuDevicesProps } from "@/app/types/types";
import Image from "next/image";
import { FoundedProducts } from "../FoundedProducts/FoundedProducts";

export const SearchForm = ({ handleCartClick,
  className,
  searchInput,
  handleSubmit,
  foundProducts,
  handleChange,
  clearFoundProducts, }: MenuDevicesProps) => {

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
      <FoundedProducts
        foundProducts={foundProducts}
        clearFoundProducts={clearFoundProducts}
      />
    </>

  )
}
