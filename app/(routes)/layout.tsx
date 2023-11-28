"use client";
import { ReactNode, useEffect, useState } from "react";
import { Menu } from "../components/Menu/Menu";
import { DeliveryInfo } from "../components/DeliveryInfo/DeliveryInfo";
import { Toaster } from "@/components/ui/toaster";
import { ProductType } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { addProduct } from "../GlobalRedux/Features/counter/counterSlice";

const Layout = ({ children }: { children: ReactNode }) => {
  const [_, setIsarrowhidden] = useState(true);
  const productCart = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart: ProductType[] = JSON.parse(
      localStorage.getItem("cart") || "{}"
    );
    if (savedCart.length > 0 && productCart.length === 0) {
      for (const key of savedCart) {
        dispatch(addProduct(key));
      }
    }
  }, [dispatch, productCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productCart));
  }, [productCart]);

  return (
    <div className="relative">
      <DeliveryInfo />
      <Menu setIsarrowhidden={setIsarrowhidden} />
      <Toaster />
      <div className="mt-40">{children}</div>
    </div>
  );
};

export default Layout;
