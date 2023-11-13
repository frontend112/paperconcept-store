'use client'
import { Product } from "@/app/components/Product/Product";
import { getProductsByInput } from "@/app/getData/getProductsByInput";
import { usePathname } from "next/navigation"

const Page = () => {
  const pathname = usePathname().replace('/submit-search/', '');
  const products = getProductsByInput(pathname)
  return (
    <div className="lg:p-10">
      {products.length === 0 && <p>there is no products under <b>{pathname}</b></p>}
      <ul className="lg:grid lg:grid-cols-4">
        {products.map(product => <Product key={product.id} {...product} />)}
      </ul>
    </div>
  )
}

export default Page