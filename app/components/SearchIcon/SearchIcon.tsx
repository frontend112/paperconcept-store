import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RefObject, useRef } from "react";

export const SearchIcon = ({ formElement }: { formElement: RefObject<HTMLFormElement> }) => {
  return (
    <li className="cursor-pointer" onClick={() => (
      formElement.current?.classList.toggle('hidden')
    )}>
      <FontAwesomeIcon icon={faSearch} />
    </li>
  )
}
