import { ChangeEvent, FormEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getProductsByInput } from "@/app/getData/getProductsByInput";

export const SearchForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    // add searching with bit delay on typing with shadcn ui
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(getProductsByInput(e.target.value))
  }
  return (
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
      />
    </form>
  )
}
