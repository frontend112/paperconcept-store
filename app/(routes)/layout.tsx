'use client'
import { ReactNode } from 'react'
import { Menu } from "../components/Menu/Menu"
import { DeliveryInfo } from "../components/DeliveryInfo/DeliveryInfo"

const layout = ({ children, isScrolled }: { children: ReactNode, isScrolled: boolean }) => {
  return (
    <>
      <DeliveryInfo />
      <Menu />
      <div className="mt-28">
        {children}
      </div>
    </>
  )
}

export default layout