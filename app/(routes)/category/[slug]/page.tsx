'use client'
import React from 'react'

import { getProducts } from "@/app/getData/getProducts";
import { getCategories } from "@/app/getData/getCategories";
import { redirect, usePathname } from "next/navigation";
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
    <>
      <div className="grid grid-cols-4 gap-1 p-[5%]">{currentProducts?.map(({
        product, price, id
      }) => (
        <div key={id} className="w-full">
          <div className="w-[300px]">
            {/* change this somehow to position static */}
            <Image
              src={`https://picsum.photos/id/${id}/300`}
              alt="product"
              // layout="fill"
              // fill
              // sizes="width: 100%, height: 100%"
              width="300"
              height="300"
              // width='300'
              // height='300'
              objectFit="cover"
            />
          </div>
          <div className="product__description">
            <div className="h-1/5">
              {product}
            </div>
            <div>
              {price}
            </div>
          </div>
        </div>
      ))}</div>
    </>
  )
}

export default Category