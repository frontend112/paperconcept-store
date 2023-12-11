"use client";
import { addProduct } from "@/app/GlobalRedux/Features/cart/cartSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { ProductType } from "@/app/types/types";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UpdateOrder = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state: RootState) => state.products);
  const session = useSession();

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

  const updateOrder = useCallback(async () => {
    try {
      const user: any = session?.data;
      const cart = localStorage.getItem("cart");
      const res = await fetch("/api/updateOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: { cart, userId: user.id },
        }),
      });
      console.log(res);
      if (!res.ok) {
        toast({
          description: "cannot upload cart on db",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [session]);

  useEffect(() => {
    if (session?.data?.user) {
      updateOrder();
    }
  }, [session, updateOrder, productCart]);

  return <></>;
};
