import { ProductType } from "@/app/types/types";
type Props = {
  foundProducts: ProductType[];
  clearFoundProducts: () => void;
};

import Image from "next/image";
import Link from "next/link";
export const FoundedProducts = ({
  foundProducts,
  clearFoundProducts,
}: Props) => {
  return (
    <>
      {foundProducts.length > 0 && (
        <div
          className="absolute top-24 lg:top-full
        lg:left-1/2 lg:translate-x-[-50%] lg:w-4/5
      bg-white text-black z-10"
        >
          <div className="relative border-solid border-2">
            <ul className="grid grid-cols-4 gap-4">
              {foundProducts.map(({ id, name, price, src, slug }) => (
                <li key={id}>
                  <div>
                    <Link
                      onClick={clearFoundProducts}
                      href={`/product-page/${id}-${slug}`}
                      className="block"
                    >
                      <Image width={140} height={140} alt="product" src={src} />
                    </Link>
                  </div>
                  <p>
                    <Link
                      onClick={clearFoundProducts}
                      href={`/product-page/${id}-${slug}`}
                      className="block"
                    >
                      {name}
                    </Link>
                  </p>
                  <p>{price} zł</p>
                </li>
              ))}
            </ul>
            <button
              className="absolute right-4 top-4"
              onClick={clearFoundProducts}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};
