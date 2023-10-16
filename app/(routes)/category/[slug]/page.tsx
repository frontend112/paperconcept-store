'use client'
import React from 'react'

import { getProducts } from "@/app/getData/getProducts";
import { getCategories } from "@/app/getData/getCategories";
import { redirect, usePathname } from "next/navigation";
import { Product } from "@/app/components/Product/Product";
import Image from "next/image";
const products = getProducts

const categories = getCategories

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
    <div className="flex justify-center">
      <div className="flex gap-1 p-[5%] flex-wrap">{currentProducts?.map(({
        product, price, id
      }) => (
        <Product
          product={product}
          price={price}
          id={id}
          key={id}
        />
      ))}</div>
    </div>
  )
}

export default Category