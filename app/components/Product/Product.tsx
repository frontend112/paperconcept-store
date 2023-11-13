import { ChangeEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { ProductType } from "@/app/types/types";
import { addProduct } from "@/app/GlobalRedux/Features/counter/counterSlice";
import { Button } from "@/components/ui/button";
import cn from "classnames";

export const Product = ({
  name,
  price,
  src,
  id,
  slug,
}: ProductType) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handlequantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuantity(+value)
  };

  return (
    <div className="product">
      <Link
        className="image__wrapper"
        href={`/product-page/${id}-${slug}`}
      >
        <Image
          src={src || `https://picsum.photos/id/${id}/300`}
          alt={name}
          width={300}
          height={300}
          className="w-full"
        />
      </Link>
      <section className="product__description">
        <p><Link href={`/product-page/${id}-${slug}`}>{name}</Link></p>
        <p>{price} zł</p>
        <div className="product__add-to-cart">
          <Button
            onClick={() => {
              dispatch(addProduct({
                name,
                price,
                src,
                id,
                slug,
                quantity,
              }))
            }}
            className="rounded-none w-full"
          >Dodaj do koszyka</Button>
          <div className="text-center">
            <button
              className={cn(quantity === 1 && 'invisible')}
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
          </div>
        </div>
      </section>
    </div>
  )
}
