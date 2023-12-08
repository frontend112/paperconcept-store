"use client";
import { clearCart } from "@/app/GlobalRedux/Features/cart/cartSlice";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

const Page = () => {
  const session: any = useSession();
  const dispatch = useDispatch();
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
