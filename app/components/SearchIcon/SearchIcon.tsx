import { RefObject } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchIcon = ({ formElement }: { formElement: RefObject<HTMLFormElement> }) =>
  <li className="cursor-pointer" onClick={() => (
    formElement.current?.classList.toggle('hidden')
  )}>
    <FontAwesomeIcon icon={faSearch} />
  </li>
