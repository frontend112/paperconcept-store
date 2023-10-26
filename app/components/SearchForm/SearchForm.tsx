import { FormEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    // add searching with bit delay on typing with shadcn ui
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
        type="text"
        className="
                search__input
                bg-transparent
                white
                placeholder:text-inherit
                outline-none
                border-b-2
                pl-6
                pb-1.5
                border-white
                hover:border-black
              "
        id="search"
        placeholder="Szukaj produktu"
      />
    </form>
  )
}
