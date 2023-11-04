import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {children}
    </div>
  )
}

export default layout