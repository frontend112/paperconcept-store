"use client";
import {
  addProduct,
  clearCart,
} from "@/app/GlobalRedux/Features/cart/cartSlice";
import { RootState } from "@/app/GlobalRedux/store";
import { AddedProduct } from "@/app/types/types";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const session: any = useSession();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.products);

  const getCart = useCallback(async () => {
    const res = await fetch("/api/getUserCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: session.id }),
    });
    console.log(res);
    if (res.ok && !localStorage.getItem("cart")) {
      dispatch(clearCart());
      const { cart } = await res.json();
      cart.forEach((product: AddedProduct) => dispatch(addProduct(product)));
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
