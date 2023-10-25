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
            name={getProducts[prevCounter + el].name}
            price={getProducts[prevCounter + el].price}
            src={getProducts[prevCounter + el].src}
          />
        ))}

      </div>
      <div className="grid grid-cols-[repeat(4,1fr)]">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(counter + el).toString()}
            key={el}
            name={getProducts[counter + el].name}
            price={getProducts[counter + el].price}
            src={getProducts[counter + el].src}
          />
        ))}
      </div>
      <div className="hidden">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(prevCounter + el).toString()}
            key={el}
            name={getProducts[nextCounter + el].name}
            price={getProducts[nextCounter + el].price}
            src={getProducts[nextCounter + el].src}
          />
        ))}
      </div>
    </div>
  )
}
