'use client'
import { ReactNode } from 'react'
import { Menu } from "../components/Menu/Menu"
import { BlackInfo } from "../components/BlackInfo/BlackInfo"

const layout = ({ children, isScrolled }: { children: ReactNode, isScrolled: boolean }) => {
  return (
    <>
      <BlackInfo />
      <Menu />
      <div className="mt-28">
        {children}
      </div>
    </>
  )
}

export default layout