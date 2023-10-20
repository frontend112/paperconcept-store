import { addProduct } from "@/app/GlobalRedux/Features/counter/counterSlice"
import { ProductType } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from 'react'
import { useDispatch } from "react-redux"

export const Product = ({
  name,
  price,
  src,
  id,
}: ProductType) => {
  const dispatch = useDispatch();

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
      <p>{name}</p>
      <p>{price}</p>
      <Button onClick={() => {
        dispatch(addProduct({
          name: name,
          price: price,
          src: src,
          id: id,
        }))
      }
      }>Dodaj do koszyka</Button>
    </div>
  )
}
