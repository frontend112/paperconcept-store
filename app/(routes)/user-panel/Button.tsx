import React, { ReactNode } from 'react'

export const Button = (
  { children }: { children: ReactNode }
) => {
  return (
    <button className="
      w-1/2 h-16 mt-4
      border-solid border-slate-500 border
      font-semibold hover:font-bold hover:tracking-[-0.005em]
      hover:border-slate-800
    ">{children}</button>
  )
}
