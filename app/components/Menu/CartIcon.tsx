import cn from "classnames"
import { ExtraClassNames } from "@/app/types/types"
import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"

type Props = {
  className?: ExtraClassNames,
  handleCartClick: () => void,
}

export const CartIcon = ({ className, handleCartClick }: Props) => {
  const cartProducts = useSelector((state: RootState) => state.products)
  const cartProductsquantity = cartProducts
    .map(product => product.quantity)
    .reduce((acc, current) => acc + current, 0)

  return (
    <li>
      <div
        className={cn(
          'nav__cart',
          'relative',
          className === ExtraClassNames.TRANSPARENT
          && 'nav__cart--transparent',
          'w-5', 'h-5', 'block',
        )}
        onClick={handleCartClick}
      >
        <span className="absolute right-[-0.7rem] top-[-0.2rem] text-xs">{cartProductsquantity}</span>
      </div>
    </li>
  )
}

export default CartIcon