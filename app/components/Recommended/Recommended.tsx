'use client'
import React, { useState } from 'react'

import { getProducts } from "@/app/getData/getProducts"
import { Product } from "../Product/Product";
import { Arrow } from "../Arrow/Arrow";
import { DIRECTIONS } from "@/app/types/types";
const productAmount = 4;

export const Recommended = () => {
  const [counter, setCounter] = useState(0)

  const changeCounter = (direction: DIRECTIONS) => {
    if (direction === DIRECTIONS.LEFT && counter < productAmount) (
      setCounter(getProducts.length - productAmount)
    )
    if (direction === DIRECTIONS.RIGHT && counter > getProducts.length - productAmount - 1) (
      setCounter(0)
    )
    if (direction === DIRECTIONS.LEFT) (
      setCounter(state => state - productAmount)
    )
    if (direction === DIRECTIONS.RIGHT) (
      setCounter(state => state + productAmount)
    )
  }
  return (
    <div className="relative overflow-hidden">
      <Arrow
        direction={DIRECTIONS.LEFT}
        handleArrowClick={changeCounter}
        isLoading={false}
      >&lt;</Arrow>
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
      <Arrow
        direction={DIRECTIONS.RIGHT}
        handleArrowClick={changeCounter}
        isLoading={false}
      >&gt;</Arrow>
    </div>
  )
}
