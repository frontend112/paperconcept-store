import React from 'react'
import { getSubpages as subpages } from "@/app/getData/getSubpages";
import Link from "next/link";

export const SubPages = () => {
  return (
    <ul className="flex uppercase text-[0.6rem] pb-4">
      {
        subpages.map(({ id, name, slug }) => (
          <li key={id}>
            <Link href={`/${slug}`} className="px-1.5 py-2">{name}</Link>
          </li>
        ))
      }
    </ul>
  )
}
