import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeProduct } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { AddedProduct, ProductType } from "@/app/types/types";
import Link from "next/link";
import cn from 'classnames';

export const CartProduct = ({ id, name, price, src, quantity, slug }: AddedProduct) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.products)

  const productQuantity = cartProducts
    .find(product => product.id === id)
    ?.quantity || 0

  const handleRemoveproduct = (id: string) => {
    const storedCart: ProductType[] = JSON.parse(localStorage.getItem('cart') || '{}');
    localStorage.setItem('cart',
      JSON.stringify(storedCart.filter(el => el.id !== id)));

    dispatch(removeProduct({ id }))
  }
  return (
    <li key={id} className="cart__product-wrapper">
      <section className="cart__product">
        <Link className="cart__image-wrapper block" href={`/product-page/${id}-${slug}`}>
          <Image
            src={src || `https://picsum.photos/id/${id}/50`}
            alt={name}
            width={50}
            height={50}
            className="w-full"
          />
        </Link>
        <h3><Link className="cart__image-wrapper block" href={`/product-page/${id}-${slug}`}>{name}</Link></h3>
        <button
          className="cart__bin w-5 h-5 justify-self-end"
          onClick={() => handleRemoveproduct(id)}
        ></button>
        <h4>{price.toFixed(2)} zł</h4>
        <div className="text-center">
          <button
            className={cn(quantity === 1 && 'invisible')}
            onClick={() => dispatch(decreaseQuantity({ id }))}
          >-</button>
          <input
            onChange={() => { }}
            value={productQuantity}
            type="number"
            className="
              cart__input w-6 h-6 mx-2
              border-black border-solid rounded-full border-2
              outline-none text-center
            "
          />
          <button onClick={() => {
            dispatch(increaseQuantity({ id }))
          }
          }>+</button>
        </div>
      </section>
    </li>
  )
}
