import React from 'react'

import { getCategories as categories } from "@/app/getData/getCategories"
import Link from "next/link"
export const Categories = () => {

  return (
    <ul className="flex justify-between text-inherit">
      {categories.map(({ category, id, slug }) => (
        <li key={id}>
          <Link href={`/category/${slug}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
