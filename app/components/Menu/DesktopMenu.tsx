import cn from "classnames"
import { ExtraClassNames, MenuDevicesProps } from "@/app/types/types"
import { Logo } from "../Logo/Logo"
import { SearchForm } from "../SearchForm/SearchForm"
import { SubPages } from "../SubPages/SubPages"
import { UserIcon } from "./UserIcon"
import { CartIcon } from "./CartIcon"
import { Categories } from "./Categories"

export const DesktopMenu = ({
  handleCartClick,
  className,
  searchInput,
  handleSubmit,
  foundProducts,
  handleChange,
  clearFoundProducts }: MenuDevicesProps) => {
  return (
    <section className={cn(
      'section', 'm-auto', 'px-[5%]', 'hidden', 'lg:block', className === ExtraClassNames.TRANSPARENT && 'text-white',
    )}>
      <nav className="nav section__nav flex justify-between p-5">
        <Logo classNames={className} />
        <SearchForm
          handleCartClick={handleCartClick}
          className={className}
          searchInput={searchInput}
          handleSubmit={handleSubmit}
          foundProducts={foundProducts}
          handleChange={handleChange}
          clearFoundProducts={clearFoundProducts}
        />
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
  )
}
