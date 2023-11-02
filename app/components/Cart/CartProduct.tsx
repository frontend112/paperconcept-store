import React from 'react'

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeProduct } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { AddedProduct } from "@/app/types/types";

export const CartProduct = ({ id, name, price, src, quantity }: AddedProduct) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.products)

  const productQuantity = cartProducts
    .find(product => product.id === id)
    ?.quantity || 0

  return (
    <li key={id} className="cart__product-wrapper">
      <section className="cart__product">
        <div className="cart__image-wrapper">
          <Image
            src={src || `https://picsum.photos/id/${id}/50`}
            alt={name}
            width={50}
            height={50}
            className="w-full"
          />
        </div>
        <h3>{name}</h3>
        <button
          className="cart__bin w-5 h-5 justify-self-end"
          onClick={() => {
            dispatch(removeProduct({ id }))
          }}
        ></button>
        <h4>{price.toFixed(2)} zł</h4>
        <div className="text-center">
          <button
            disabled={quantity === 1}
            onClick={() => dispatch(decreaseQuantity({ id }))}
          >-</button>
          <input
            value={productQuantity}
            type="number"
            className="
              cart__input w-6 h-6 mx-2
              border-black border-solid rounded-full border-2
              outline-none text-center
            "
          />
          <button onClick={() => {
            dispatch(increaseQuantity({
              id,
            }))
          }
          }>+</button>
        </div>
      </section>
    </li>
  )
}
