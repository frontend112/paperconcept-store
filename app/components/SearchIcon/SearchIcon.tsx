import { Dispatch, RefObject, SetStateAction } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchIcon = ({
  formElement,
  setIsArrowhidden,
}: {
  formElement: RefObject<HTMLFormElement>;
  setIsArrowhidden: Dispatch<SetStateAction<boolean>>;
}) => (
  <li
    className="cursor-pointer"
    onClick={() => {
      formElement.current?.classList.toggle("hidden");
      setIsArrowhidden((state) => !state);
    }}
  >
    <FontAwesomeIcon icon={faSearch} />
  </li>
);
