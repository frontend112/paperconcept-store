"use client";
import { clearCart } from "@/app/GlobalRedux/Features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  if (typeof window !== "undefined") {
    dispatch(clearCart());
  }
  return (
    <div className="px-[5%] text-2xl">
      Zamówienie zostało opłacone pomyślnie
    </div>
  );
};

export default Page;
