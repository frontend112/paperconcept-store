"use client";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";

const Page = () => {
  // const session = useSession();
  // console.log(session);

  return (
    <div className="px-[5%] pt-4">
      <div className="text-right">
        {/* <button onClick={() => signOut()}>wyloguj się</button> */}
        {/* <div>{session?.data?.user?.email}</div> */}
      </div>
    </div>
  );
};

export default Page;
