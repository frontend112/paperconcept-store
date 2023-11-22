'use client'
import { ReactNode, useState } from "react"
import { Menu } from "../components/Menu/Menu"
import { DeliveryInfo } from "../components/DeliveryInfo/DeliveryInfo"
import { Toaster } from "@/components/ui/toaster"

const Layout = ({ children }: { children: ReactNode, }) => {
  const [_, setIsarrowhidden] = useState(true);
  return (
    <div className="relative">
      <DeliveryInfo />
      <Menu setIsarrowhidden={setIsarrowhidden} />
      <Toaster />
      <div className="mt-40">
        {children}
      </div>
    </div>
  )
}

export default Layout