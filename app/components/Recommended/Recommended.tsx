'use client'
import { useCallback, useEffect, useRef, useState } from "react";

import { DIRECTIONS } from "@/app/types/types";
import { getProducts as products } from "@/app/getData/getProducts"
import { Product } from "../Product/Product";
import { Arrow } from "../Arrow/Arrow";

const productAmount = 4;

export const Recommended = () => {
  const [counter, setCounter] = useState(0);
  const maxProductPosition = products.length - 2 * productAmount
  const productEl = useRef<HTMLDivElement>(null);

  const interval = setInterval(() => { changeCounter(DIRECTIONS.RIGHT) }, 7000)
  const changeCounter = useCallback((direction: DIRECTIONS) => {
    clearInterval(interval)
    if (direction === DIRECTIONS.LEFT && counter < productAmount) {
      setCounter(maxProductPosition)
      return
    }
    if (direction === DIRECTIONS.RIGHT && counter >= maxProductPosition) {
      setCounter(0)
      return
    }
    if (direction === DIRECTIONS.LEFT) {
      productEl.current?.classList.add('animate-move-product-right')
      setTimeout(() => {
        setCounter(state => state - productAmount)
        productEl.current?.classList.remove('animate-move-product-right')
      }, 200)
    }
    if (direction === DIRECTIONS.RIGHT) {
      productEl.current?.classList.add('animate-move-product-left')
      setTimeout(() => {
        setCounter(state => state + productAmount)
        productEl.current?.classList.remove('animate-move-product-left')
      }, 200)
    }
  }, [counter, maxProductPosition, interval])


  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval])

  return (
    <div className="relative overflow-hidden">
      <Arrow
        direction={DIRECTIONS.LEFT}
        handleArrowClick={changeCounter}
        isLoading={false}
      >&lt;</Arrow>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-4 px-12" ref={productEl}>
        {Array.from({ length: productAmount }, (_, i) => i).map(el => (
          <div key={counter + el}>
            <Product
              id={(counter + el).toString()}
              name={products[counter + el].name}
              price={products[counter + el].price}
              src={products[counter + el].src}
              slug={products[counter + el].slug}
            />
          </div>
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
