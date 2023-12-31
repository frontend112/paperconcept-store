"use client";
import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import { ChangeEvent, useContext, useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "@/app/GlobalRedux/Features/cart/cartSlice";
import { Button } from "@/components/ui/button";
import cn from "classnames";
import { ProductContext } from "@/app/ProductsProvider";

const Page = () => {
  const products = useContext(ProductContext);
  console.log(products, "productpage");
  const pathname = usePathname().replace("/product-page/", "");

  const recentProduct = products.find(
    ({ slug, id }) => `${id}-${slug}` === pathname
  );

  if (!recentProduct) {
    redirect("/");
  }

  const { id, slug, name, price, src } = recentProduct;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handlequantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuantity(+value);
  };

  return (
    <div className="p-[5%]">
      <ul className="flex text-xs">
        <li>
          <Link href="/">Strona główna</Link>/
        </li>
        <li>
          <Link href={`/category/${slug}`}>{slug}</Link>/
        </li>
        <li>{name}</li>
      </ul>
      <div className="md:flex justify-between md:pt-8">
        <section className="md:w-1/2">
          <Image
            src={src || `https://picsum.photos/id/${id}/50`}
            alt="product"
            width={500}
            height={500}
          />
        </section>
        <section className="md:w-1/2">
          <h2 className="text-3xl">{name}</h2>
          <h3 className="text-2xl md:pt-4">{price} zł</h3>
          <div className="text-center md:pt-4">
            <button
              className={cn(quantity === 1 && "invisible")}
              onClick={() => setQuantity((state) => state - 1)}
            >
              -
            </button>
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
            <button onClick={() => setQuantity((state) => state + 1)}>+</button>

            <Button
              onClick={() => {
                dispatch(
                  addProduct({
                    ...recentProduct,
                    quantity,
                  })
                );
              }}
              className="rounded-none w-full mt-8"
            >
              Dodaj do koszyka
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
