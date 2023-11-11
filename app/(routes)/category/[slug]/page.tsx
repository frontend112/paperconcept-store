'use client'

import { getProducts as products } from "@/app/getData/getProducts";
import { getCategories as categories } from "@/app/getData/getCategories";
import { redirect, usePathname } from "next/navigation";
import { Product } from "@/app/components/Product/Product";

const Category = () => {
  const pathName = usePathname();
  const currentPathname = pathName.replace('/category/', '')

  const currentCategory = categories?.find(category => (
    category.slug === currentPathname
  ))?.slug;

  if (!currentCategory) {
    redirect('/')
  }

  const currentProducts = products?.filter(product => (
    product.slug === currentCategory
  ))

  return (
    <>{currentProducts?.map(({
      name, price, id, src, slug
    }) => (
      <Product
        name={name}
        price={price}
        id={id}
        key={id}
        src={src}
        slug={slug}
      />
    ))}</>
  )
}

export default Category