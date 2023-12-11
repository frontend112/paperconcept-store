"use client";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { ProductType } from "./types/types";
export const ProductContext = createContext<ProductType[]>([]);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState([]);
  const importProducts = async () => {
    const res = await fetch("api/getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      setProducts(data);
    }
  };

  useEffect(() => {
    importProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
