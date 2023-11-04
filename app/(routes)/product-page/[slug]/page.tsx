'use client'

import Link from "next/link";
import Image from "next/image";

import { redirect, usePathname } from "next/navigation"
import { getProducts as products } from "@/app/getData/getProducts";

const Page = () => {
  const pathname = usePathname();
  const directPath = pathname.replace('/product-page/', '');

  const recentProduct = products.find(({ slug, id }) => `${id}-${slug}` === directPath)

  if (!recentProduct) {
    redirect('/')
  }

  const { id, slug, name, price, src } = recentProduct;
  return (
    <div className="p-[5%]">
      <ul className="flex text-xs">
        <li>
          <Link href="/">Strona główna</Link>/
        </li>
        <li>
          <Link href={`/category/${slug}`}>{slug}</Link>/
        </li>
        <li>
          {name}
        </li>
      </ul>
    </div>
  )
}

export default Page
