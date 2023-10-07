import { ProductProps } from "@/app/types/types"
import Image from "next/image"
import React from 'react'

export const Product = ({
  product,
  price,
  src,
}: ProductProps) => {
  return (
    <div className="product">
      <div className="image__wrapper">
        <Image
          src={src || 'https://placehold.co/300x300'}
          alt="product"
          width={300}
          height={300}
        />
      </div>
      <p>{product}</p>
      <p>{price}</p>
    </div>
  )
}
