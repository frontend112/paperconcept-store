"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MenuDevicesProps, ProductType } from "@/app/types/types";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { FoundedProducts } from "../FoundedProducts/FoundedProducts";
import { useRouter } from "next/navigation";

export const SearchForm = () => {
  const [searchInput, setSearchinput] = useState("");
  const [foundProducts, setFoundproducts] = useState<ProductType[]>([]);
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/submit-search/${searchInput}`);
    clearFoundProducts();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchinput(value);
    value.trim().length > 0
      ? setFoundproducts(getProductsByInput(e.target.value))
      : setFoundproducts([]);
  };
  const clearFoundProducts = () => {
    setFoundproducts([]);
    setSearchinput("");
  };

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
  );
};
