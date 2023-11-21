import { ReactNode } from "react"
import { Menu } from "../components/Menu/Menu"
import { DeliveryInfo } from "../components/DeliveryInfo/DeliveryInfo"
import { Toaster } from "@/components/ui/toaster"

const layout = ({ children }: { children: ReactNode, }) => {
  return (
    <>
      <DeliveryInfo />
      <Menu />
      <Toaster />
      <div className="mt-40">
        {children}
      </div>
    </>
  )
}

export default layout