import { addProduct } from "@/app/GlobalRedux/Features/counter/counterSlice"
import { ProductType } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from "react-redux"

export const Product = ({
  name,
  price,
  src,
  id,
}: ProductType) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handlequantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuantity(+value)
  }

  return (
    <div className="product">
      <div className="image__wrapper">
        <Image
          src={src || `https://picsum.photos/id/${id}/300`}
          alt="product"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <section className="product__description">
        <p>{name}</p>
        <p>{price} zł</p>
        <div className="product__add-to-cart invisible">
          <Button
            onClick={() => {
              dispatch(addProduct({
                name,
                price,
                src,
                id,
                quantity,
              }))
            }}
            className="rounded-none w-full"
          >Dodaj do koszyka</Button>
          <div className="text-center">
            <button
              onClick={() => setQuantity(state => {
                if (+state > 1) {
                  return (+state - 1)
                }
                return 1;
              })}
            >-</button>
            <input
              type="number"
              className="
                product__input w-11 h-11 mx-4
                border-black border-solid rounded-full border-2
                outline-none text-center
              "
              onChange={handlequantityChange}
              value={quantity}
            />
            <button onClick={() => setQuantity(state => (state + 1))}>+</button>
          </div>
        </div>
      </section>
    </div>
  )
}
