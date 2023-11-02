import { ProductType } from "@/app/types/types"
import React from 'react'
type Props = {
  foundProducts: ProductType[],
  clearFoundProducts: () => void
}

import Image from "next/image"
export const FoundedProducts = ({ foundProducts, clearFoundProducts }: Props) => {
  return (
    <>
      {foundProducts.length > 0 && (
        <div className="absolute top-[200%] lg:top-full
        lg:left-1/2 lg:translate-x-[-50%] lg:w-4/5
      bg-white text-black w-screen z-10">
          <div className="relative border-solid border-2">
            <ul className="grid grid-cols-4 gap-4">{foundProducts.map(({
              id,
              name,
              price,
              src
            }) =>
              <li key={id}>
                <div>
                  <Image width={140} height={140} alt="product" src={src} />
                </div>
                <p>{name}</p>
                <p>{price} zł</p>
              </li>
            )}</ul>
            <button className="absolute right-4 top-4" onClick={clearFoundProducts}>x</button>
          </div>
        </div>
      )}
    </>
  )
}
