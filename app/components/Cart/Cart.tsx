import React, { RefObject } from 'react'

import cn from "classnames"
import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {
  isCartHidden: boolean;
  cartELement: RefObject<HTMLDivElement>
  handleCartClick: () => void;
}

export const Cart = ({
  isCartHidden,
  cartELement,
  handleCartClick,
}: Props) => {
  const cartProducts = useSelector((state: RootState) => state.products)
  const totalPrice = cartProducts
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2)
  return (
    <div className=
      {cn(
        'flex', 'flex-col', 'justify-between',
        'fixed', 'right-0', 'top-0', 'w-1/4', 'h-[100vh]',
        'bg-white text-center', 'overflow-scroll',
        isCartHidden && 'translate-x-full',
      )}
      ref={cartELement}
    >
      <article>
        <section className="relative p-4">
          <h3 className="uppercase">podgląd koszyka</h3>
          <button onClick={handleCartClick} className="absolute right-4 top-[50%] translate-y-[-50%] text-xl">x</button>
        </section>
        <hr />
        {cartProducts.length > 0 ? (
          <ul className="p-4">
            {cartProducts.map(({ id, name, price }) => (
              <li key={id} className="cart-wrapper">
                <section className="cart">
                  <div className="cart__image-wrapper">
                    <Image
                      src={`https://picsum.photos/id/${id}/300`}
                      alt="product"
                      width={50}
                      height={50}
                      className="w-full"
                    />
                  </div>
                  <h3>{name}</h3>
                  <button>bin</button>
                  <h4>{price.toFixed(2)} zł</h4>
                  <h4>input</h4>
                </section>
              </li>
            ))}
          </ul>
        ) : (
          <h4 className="text-xs">Twój koszyk jest pusty.</h4>
        )}
      </article>
      <article>
        <hr />
        <section className="flex justify-between p-4">
          <span>Odbiór osobisty</span>
          <span className="text-blue-700">darmowy</span>
        </section>
        <section className="flex justify-between p-4">
          <strong>Razem:</strong>
          <strong>{totalPrice} zł</strong>
        </section>
        <section className="p-4">
          <Button className="w-full rounded-none">Przejdź do koszyka</Button>
        </section>
      </article>
    </div>
  )
}
