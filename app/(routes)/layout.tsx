import { ReactNode } from 'react'
import { Menu } from "../components/Menu/Menu"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Menu />
      <div>
        {children}
      </div>
    </>
  )
}

export default layout