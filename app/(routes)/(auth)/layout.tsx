'use client'
import React, { ReactNode } from 'react'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { email } = useSession()?.data?.user || {};
  if (!email) {
    router.replace('/sign-in')
  }
  return (
    <div>{children}</div>
  )
}

export default Layout