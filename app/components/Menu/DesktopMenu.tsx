import cn from "classnames";

import { ExtraClassNames } from "@/app/types/types";
import { Logo } from "../Logo/Logo";
import { SearchForm } from "../SearchForm/SearchForm";
import { SubPages } from "../SubPages/SubPages";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
import { Categories } from "./Categories";

type Props = {
  handleCartClick: () => void,
  className?: ExtraClassNames,
}
export const DesktopMenu = ({
  handleCartClick,
  className, }: Props) =>
  <section className={cn(
    'section', 'm-auto', 'px-[5%]', 'hidden', 'lg:block', 'py-4',
    className === ExtraClassNames.TRANSPARENT && 'text-white',
  )}>
    <nav className="nav section__nav flex justify-between p-5">
      <Logo className={className} />
      <SearchForm />
      <div className="flex flex-col">
        <SubPages />

        <ul className="nav__middle-icons flex justify-end gap-4">
          <UserIcon className={className} />
          <CartIcon
            className={className}
            handleCartClick={handleCartClick}
          />
        </ul>
      </div>
    </nav>
    <Categories />
  </section>
