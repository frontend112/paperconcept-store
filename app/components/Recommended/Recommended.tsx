'use client'
import React, { useEffect, useState, useMemo } from 'react'

import { getProducts } from "@/app/getData/getProducts"
import { Product } from "../Product/Product";
const productAmount = 4;

export const Recommended = () => {
  const [counter, setCounter] = useState(0)

  const prevCounter = useMemo(() => (
    counter <= 0 ? getProducts.length - productAmount : counter - productAmount
  ), [counter]);

  const nextCounter = useMemo(() => (
    counter >= getProducts.length - productAmount - 1 ? 0 : counter + productAmount
  ), [counter])

  // useEffect(() => {
  //   console.log(prevCounter)
  //   const timer = setTimeout(() => {
  //     if (counter >= getProducts.length - 2 * (productAmount + 1)) {
  //       setCounter(0)
  //       return;
  //     }
  //     setCounter(state => state + productAmount)
  //   }, 3000)

  //   return clearTimeout(timer)
  // }, [counter, prevCounter])

  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-[repeat(4,1fr)] gap-4 px-12 translate-x-[-100vw] absolute left-[-100vw]">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(prevCounter + el).toString()}
            key={prevCounter + el}
            name={getProducts[prevCounter + el].name}
            price={getProducts[prevCounter + el].price}
            src={getProducts[prevCounter + el].src}
          />
        ))}

      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-4 px-12">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(counter + el).toString()}
            key={counter + el}
            name={getProducts[counter + el].name}
            price={getProducts[counter + el].price}
            src={getProducts[counter + el].src}
          />
        ))}
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-4 px-12 translate-x-[100vw] absolute right-[100vw]">
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <Product
            id={(prevCounter + el).toString()}
            key={prevCounter + el}
            name={getProducts[nextCounter + el].name}
            price={getProducts[nextCounter + el].price}
            src={getProducts[nextCounter + el].src}
          />
        ))}
      </div>
      <div className="absolute left-10 top-1/2">
        <button
          className="text-xl"
          onClick={() => setCounter(state => {
            if (state < productAmount) {
              return getProducts.length - productAmount
            }
            return state - productAmount
          })}
        >&lt;</button>
      </div>
      <div className="absolute right-10 top-1/2">
        <button
          className="text-xl"
          onClick={() => setCounter(state => {
            if (state >= getProducts.length - productAmount) {
              return 0
            }
            return state + productAmount
          })}
        >&gt;</button>
      </div>
    </div>
  )
}
