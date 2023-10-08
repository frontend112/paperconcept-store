'use client'
import React, { useEffect, useState } from 'react'

import { getProducts } from "@/app/getData/getProducts"
import { Product } from "../Product/Product";
const productAmount = 4;

export const Recommended = () => {
  const [counter, setCounter] = useState(0)

  const prevCounter = counter <= 0 ? getProducts.length - productAmount : counter - productAmount;
  const nextCounter = counter >= getProducts.length - productAmount - 1 ? 0 : counter + productAmount;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter >= getProducts.length - 2 * (productAmount + 1)) {
        setCounter(0)
        return;
      }
      setCounter(state => state + productAmount)
    }, 3000)

    return clearTimeout(timer)
  }, [counter])
  return (
    <div>
      <div className="hidden">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(prevCounter + el).toString()}
            key={el}
            product={getProducts[prevCounter + el].product}
            price={getProducts[prevCounter + el].price}
          />
        ))}

      </div>
      <div className="flex justify-center">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(counter + el).toString()}
            key={el}
            product={getProducts[counter + el].product}
            price={getProducts[counter + el].price}
          />
        ))}
      </div>
      <div className="hidden">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(prevCounter + el).toString()}
            key={el}
            product={getProducts[nextCounter + el].product}
            price={getProducts[nextCounter + el].price}
          />
        ))}
      </div>
    </div>
  )
}
