"use client";

import { getProducts as products } from "@/app/getData/getProducts";
import { getCategories as categories } from "@/app/getData/getCategories";
import { redirect, usePathname } from "next/navigation";
import { Product } from "@/app/components/Product/Product";

const Category = () => {
  const pathName = usePathname();
  const currentPathname = pathName.replace("/category/", "");

  const currentCategory = categories?.find(
    (category) => category.slug === currentPathname
  )?.slug;

  if (!currentCategory) {
    redirect("/");
  }

  const currentProducts = products?.filter(
    (product) => product.slug === currentCategory
  );

  return (
    <>
      {currentProducts?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </>
  );
};

export default Category;
