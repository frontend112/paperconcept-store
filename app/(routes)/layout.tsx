import { ReactNode } from 'react'
import { Menu } from "../components/Menu/Menu"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Menu />
      <div className="grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {children}
      </div>
    </>
  )
}

export default layout