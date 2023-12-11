"use client";
import {
  addProduct,
  clearCart,
} from "@/app/GlobalRedux/Features/cart/cartSlice";
import { AddedProduct } from "@/app/types/types";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const session: any = useSession();
  const dispatch = useDispatch();

  const getCart = useCallback(async () => {
    try {
      const res = await fetch("/api/getUserCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: session.id }),
      });
      if (res.ok && !localStorage.getItem("cart")) {
        dispatch(clearCart());
        const { cart } = await res.json();
        cart.forEach((product: AddedProduct) => dispatch(addProduct(product)));
      }
    } catch (error) {
      console.log("error on gettingcart from db");
    }
  }, [session.id, dispatch]);

  useEffect(() => {
    getCart();
  }, [getCart]);
  return (
    <div className="px-[5%] pt-4">
      <div className="text-right">
        <div>Witaj, {session?.data?.fullName}</div>
        <button
          onClick={() => {
            signOut();
            dispatch(clearCart());
          }}
        >
          wyloguj się
        </button>
      </div>
    </div>
  );
};

export default Page;
