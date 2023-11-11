import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-4 justify-center w-full lg:mt-48 lg:px-[10%] lg:gap-8">
      {children}
    </div>
  )
}

export default layout