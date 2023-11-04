import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {children}
    </div>
  )
}

export default layout