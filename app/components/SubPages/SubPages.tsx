import Link from "next/link";
import cn from "classnames"

import { getSubpages as subpages } from "@/app/getData/getSubpages";

export const SubPages = ({ isMobile }: { isMobile?: boolean }) =>
  <ul className={cn(
    'flex',
    isMobile ? 'capitalize p-4 flex-col bg-white'
      : 'uppercase text-[0.6rem] pb-4'
  )}>
    {
      subpages.map(({ id, name, slug }) => (
        <li className={cn(isMobile && 'py-4')} key={id}>
          <Link href={`/${slug}`} className={cn(
            isMobile ? 'text-slate-700 hover:text-slate-900 p-4'
              : 'px-1.5 py-2')}>{name}</Link>
        </li>
      ))
    }
  </ul>
