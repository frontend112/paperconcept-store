import { increment } from "@/app/GlobalRedux/Features/counter/counterSlice"
import { AppDispatch, RootState } from "@/app/GlobalRedux/store"
import { ProductProps } from "@/app/types/types"
import { Button } from "@/components/ui/button"
import { AnyAction } from "@reduxjs/toolkit"
import Image from "next/image"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"

export const Product = ({
  product,
  price,
  src,
  id,
}: ProductProps) => {
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
      <p>{product}</p>
      <p>{price}</p>
      <Button onClick={() => dispatch(increment())}>Dodaj do koszyka</Button>
    </div>
  )
}
