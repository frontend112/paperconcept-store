"use client";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import { DIRECTIONS } from "@/app/types/types";

import { Product } from "../Product/Product";
import { Arrow } from "../Arrow/Arrow";
import { ProductContext } from "@/app/ProductsProvider";

export const Recommended = ({
  isArrowhidden,
  isRanimationStop,
}: {
  isArrowhidden: boolean;
  isRanimationStop: boolean;
}) => {
  const products = useContext(ProductContext);
  const productAmount = 4;
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const maxProductPosition = products.length - 2 * productAmount;
  const productsEl = useRef<HTMLDivElement>(null);
  const visibleProducts = products.filter((_, index) => {
    if (index >= counter && index < counter + productAmount) {
      return true;
    }
  });

  const interval = setInterval(() => {
    changeCounter(DIRECTIONS.RIGHT);
  }, 2000);
  const changeCounter = useCallback(
    (direction: DIRECTIONS) => {
      clearInterval(interval);
      setIsLoading(true);
      if (direction === DIRECTIONS.LEFT && counter < productAmount) {
        productsEl.current?.classList.add("animate-move-product-right");
        setTimeout(() => {
          productsEl.current?.classList.remove("animate-move-product-right");
          setCounter(maxProductPosition);
          setIsLoading(false);
        }, 400);
        return;
      }
      if (direction === DIRECTIONS.RIGHT && counter >= maxProductPosition) {
        productsEl.current?.classList.add("animate-move-product-left");
        setTimeout(() => {
          productsEl.current?.classList.remove("animate-move-product-left");
          setCounter(0);
          setIsLoading(false);
        }, 400);
        return;
      }
      if (direction === DIRECTIONS.LEFT) {
        productsEl.current?.classList.add("animate-move-product-right");
        setTimeout(() => {
          productsEl.current?.classList.remove("animate-move-product-right");
          setCounter((state) => state - productAmount);
          setIsLoading(false);
        }, 400);
      }
      if (direction === DIRECTIONS.RIGHT) {
        productsEl.current?.classList.add("animate-move-product-left");
        setTimeout(() => {
          productsEl.current?.classList.remove("animate-move-product-left");
          setCounter((state) => state + productAmount);
          setIsLoading(false);
        }, 400);
      }
    },
    [counter, maxProductPosition, interval, productAmount]
  );

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  useEffect(() => {
    if (isRanimationStop) {
      clearInterval(interval);
    }
  }, [isRanimationStop, interval]);

  return (
    <div className="relative">
      <Arrow
        direction={DIRECTIONS.LEFT}
        handleArrowClick={changeCounter}
        isLoading={isLoading}
        isArrowhidden={isArrowhidden}
      >
        &lt;
      </Arrow>
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4`} ref={productsEl}>
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
      <Arrow
        direction={DIRECTIONS.RIGHT}
        handleArrowClick={changeCounter}
        isLoading={isLoading}
        isArrowhidden={isArrowhidden}
      >
        &gt;
      </Arrow>
    </div>
  );
};
