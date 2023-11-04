'use client'
import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation"
import { ChangeEvent, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts as products } from "@/app/getData/getProducts";
import { addProduct, decreaseQuantity, increaseQuantity } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { Button } from "@/components/ui/button";

const Page = () => {
  const pathname = usePathname();
  const directPath = pathname.replace('/product-page/', '');
  const cartProducts = useSelector((state: RootState) => state.products)

  const recentProduct = products.find(({ slug, id }) => `${id}-${slug}` === directPath)

  if (!recentProduct) {
    redirect('/')
  }

  const { id, slug, name, price, src } = recentProduct;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const productQuantity = cartProducts
    .find(product => product.id === id)
    ?.quantity || 1

  const handlequantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuantity(+value)
  }

  return (
    <div className="p-[5%]">
      <ul className="flex text-xs">
        <li>
          <Link href="/">Strona główna</Link>/
        </li>
        <li>
          <Link href={`/category/${slug}`}>{slug}</Link>/
        </li>
        <li>
          {name}
        </li>
      </ul>
      <div className="flex justify-between">
        <section>
          <Image
            src={src || `https://picsum.photos/id/${id}/50`}
            alt="product"
            width={500}
            height={500}
          />
        </section>
        <section>
          <h2>{name}</h2>
          <h3>{price} zł</h3>
          <div className="text-center">
            <button
              disabled={quantity === 1}
              onClick={() => setQuantity(state => state - 1)}
            >-</button>
            <input
              type="number"
              className="
              product__input w-11 h-11 mx-4
              border-black border-solid rounded-full border-2
              outline-none text-center
            "
              onChange={handlequantityChange}
              value={quantity}
            />
            <button onClick={() => setQuantity(state => (state + 1))}>+</button>

            <Button
              onClick={() => {
                dispatch(addProduct({
                  name,
                  price,
                  src,
                  id,
                  quantity,
                }))
              }}
              className="rounded-none w-full"
            >Dodaj do koszyka</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
