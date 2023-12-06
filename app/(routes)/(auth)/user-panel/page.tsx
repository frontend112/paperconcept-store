"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Page = () => {
  const session: any = useSession();

  return (
    <div className="px-[5%] pt-4">
      <div className="text-right">
        <div>Witaj, {session?.data?.fullName}</div>
        <button onClick={() => signOut()}>wyloguj się</button>
      </div>
    </div>
  );
};

export default Page;
