"use client";
import { Product } from "@/app/components/Product/Product";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { ProductContext } from "@/app/ProductsProvider";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Page = () => {
  const products = useContext(ProductContext);
  const pathname = usePathname().replace("/submit-search/", "");
  const foundProducts = getProductsByInput(pathname, products);
  return (
    <div className="lg:p-10">
      {foundProducts.length === 0 && (
        <p>
          there is no products under <b>{pathname}</b>
        </p>
      )}
      <ul className="lg:grid lg:grid-cols-4">
        {foundProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
