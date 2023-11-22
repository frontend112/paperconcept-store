'use client'
import { RootState } from "@/app/GlobalRedux/store";
import cn from "classnames";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { ProductType } from "@/app/types/types";
import { removeProduct } from "@/app/GlobalRedux/Features/counter/counterSlice";
import Image from "next/image";
import { decreaseQuantity, increaseQuantity } from "@/app/GlobalRedux/Features/counter/counterSlice";
import Link from "next/link";
import { addProduct } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { Button } from "@/components/ui/button";

const Page = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state: RootState) => state.products);

  const handleRemoveproduct = (id: string) => {
    const storedCart: ProductType[] = JSON.parse(localStorage.getItem('cart') || '{}');
    localStorage.setItem('cart',
      JSON.stringify(storedCart.filter(el => el.id !== id)));

    dispatch(removeProduct({ id }))
  }
  const cartProducts = useSelector((state: RootState) => state.products);

  const totalPrice = cartProducts
    .map(({ price, quantity }) => price * quantity)
    .reduce((acc, current) => acc + current, 0)
    .toFixed(2);

  useEffect(() => {
    const savedCart: ProductType[] = JSON.parse(localStorage.getItem('cart') || '{}');
    if (savedCart.length > 0 && productCart.length === 0) {
      for (const key of savedCart) {
        dispatch(addProduct(key));
      }
    }
  }, [dispatch, productCart])

  if (cartProducts.length === 0) {
    return <h2 className="flex text-center text-xxl items-center">Twój koszyk jest pusty</h2>
  }

  return (<>
    <h2 className="text-3xl px-[5%] pt-4 uppercase">twój koszyk</h2>
    <div className="lg:flex">
      <ul className="checkout lg:w-3/5 px-[5%] pt-8">
        {cartProducts.map(({ id, name, price, src, quantity, slug }) => (<li key={id} className="checkout__product py-8 flex w-full">
          <Link className="checkout__image block w-1/3" href={`/product-page/${id}-${slug}`}>
            <Image
              src={src || `https://picsum.photos/id/${id}/200`}
              alt={name}
              width={200}
              height={200}
            />
          </Link>
          <section className="w-2/3">
            <div className="flex justify-between pt-16">
              <h3><Link href={`/product-page/${id}-${slug}`}>{name}</Link></h3>
              <button
                className="cart__bin w-5 h-5"
                onClick={() => handleRemoveproduct(id)}
              ></button>
            </div>
            <div className="flex justify-between pt-4">
              <div>
                <button
                  disabled={quantity === 1}
                  className={cn(quantity === 1 && 'text-slate-500')}
                  onClick={() => dispatch(decreaseQuantity({ id }))}
                >-</button>
                <input
                  onChange={() => { }}
                  value={quantity}
                  type="number"
                  className="
              cart__input w-6 h-6 mx-2
              border-black border-solid border-2
              outline-none text-center
            "
                />
                <button onClick={() => {
                  dispatch(increaseQuantity({ id }))
                }
                }>+</button>
              </div>
              <h4 className="font-bold">{price.toFixed(2)} zł</h4>

            </div>
          </section>
        </li>))}
      </ul>
      <aside className="lg:w-2/5 pr-[5%] text-sm pt-8">
        {+totalPrice < 300 && <div className="flex justify-between px-4 py-2">
          <p>Do darmowej wysyłki kurierem brakuje</p>
          <span>{(300 - +totalPrice).toFixed(2)} zł</span>
        </div>}
        {+totalPrice < 100 && <div className="flex justify-between px-4 py-2">
          <p>Do darmowej wysyłki do paczkomatu brakuje</p>
          <span>{(100 - +totalPrice).toFixed(2)} zł</span>
        </div>}
        <div className="flex justify-between p-4">
          <p>Odbiór osobisty</p>
          <span className="text-blue-700">darmowy</span>
        </div>
        <hr className="font-bold bg-black h-[1.5px]" />
        <div className="flex justify-between p-4">
          <strong>RAZEM</strong>
          <span>{totalPrice} zł</span>
        </div>
        <Button className="w-full rounded-none">Realizuj zamówienie</Button>
      </aside>
    </div>
  </>
  )
}

export default Page
