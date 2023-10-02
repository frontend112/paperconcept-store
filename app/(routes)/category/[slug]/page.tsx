'use client'
import React from 'react'

import productsJson from '@/app/databases/products.json';
import categoriesJson from '@/app/databases/categories.json';
import { redirect, usePathname, useRouter } from "next/navigation";
const products = productsJson[2].data

const categories = categoriesJson[2].data

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
    <div className="grid grid-cols-3 gap-3 p-[5%]">{currentProducts?.map(({
      product, price, id
    }) => (
      <div key={id}>
        <div>
          {product}
        </div>
        <div>
          {price}
        </div>
      </div>
    ))}</div>
  )
}

export default Category