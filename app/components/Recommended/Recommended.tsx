'use client'
import { useCallback, useEffect, useRef, useState } from "react";

import { DIRECTIONS } from "@/app/types/types";
import { getProducts as products } from "@/app/getData/getProducts"
import { Product } from "../Product/Product";
import { Arrow } from "../Arrow/Arrow";

export const Recommended = () => {
  const [productAmount, setProductAmount] = useState(4)
  const [counter, setCounter] = useState(0);
  const maxProductPosition = products.length - 2 * productAmount
  const productsEl = useRef<HTMLDivElement>(null);

  const interval = setInterval(() => { changeCounter(DIRECTIONS.RIGHT) }, 7000)
  const changeCounter = useCallback((direction: DIRECTIONS) => {
    clearInterval(interval)
    if (direction === DIRECTIONS.LEFT && counter < productAmount) {
      productsEl.current?.classList.add('animate-move-product-right')
      setTimeout(() => {
        productsEl.current?.classList.remove('animate-move-product-right')
        setCounter(maxProductPosition)
      }, 200)
      return
    }
    if (direction === DIRECTIONS.RIGHT && counter >= maxProductPosition) {
      productsEl.current?.classList.add('animate-move-product-left')
      setTimeout(() => {
        productsEl.current?.classList.remove('animate-move-product-left')
        setCounter(0)
      }, 200)
      return
    }
    if (direction === DIRECTIONS.LEFT) {
      productsEl.current?.classList.add('animate-move-product-right')
      setTimeout(() => {
        productsEl.current?.classList.remove('animate-move-product-right')
        setCounter(state => state - productAmount)
      }, 200)
    }
    if (direction === DIRECTIONS.RIGHT) {
      productsEl.current?.classList.add('animate-move-product-left')
      setTimeout(() => {
        productsEl.current?.classList.remove('animate-move-product-left')
        setCounter(state => state + productAmount)
      }, 200)
    }
  }, [counter, maxProductPosition, interval, productAmount])
  const setProductLength = useCallback(() => {
    setProductAmount(() => window.innerWidth < 1024 ? 2 : 4)
  }, [])
  const onResize = useCallback(() => window.addEventListener('resize', () =>
    setProductLength()
  ), [setProductLength])

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval])
  useEffect(() => {
    if (window) {
      setProductLength()
      onResize()
    }
    return () => window.removeEventListener('resize', onResize)
  }, [setProductLength, onResize])

  return (
    <div className="relative">
      <Arrow
        direction={DIRECTIONS.LEFT}
        handleArrowClick={changeCounter}
        isLoading={false}
      >&lt;</Arrow>
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4`} ref={productsEl}>
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
