import Link from "next/link"
import React from 'react'
import cn from 'classnames'
import { Logo } from "../Logo/Logo"


export const StickyMenu = () => {
  return (
    <div className="
        fixed top-0 left-0
         text-black
      "
    >
      <Logo />
      <p>it will be sticky menu</p>
    </div>
  )
}
