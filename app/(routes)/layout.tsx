"use client";
import { ReactNode, useState } from "react";
import { Menu } from "../components/Menu/Menu";
import { DeliveryInfo } from "../components/DeliveryInfo/DeliveryInfo";
import { Toaster } from "@/components/ui/toaster";
import { UpdateOrder } from "@/app/components/UpdateOrder/UpdateOrder";

const Layout = ({ children }: { children: ReactNode }) => {
  const [_, setIsarrowhidden] = useState(true);

  return (
    <div className="relative">
      <UpdateOrder />
      <DeliveryInfo />
      <Menu setIsarrowhidden={setIsarrowhidden} />
      <Toaster />
      <div className="mt-40">{children}</div>
    </div>
  );
};

export default Layout;
