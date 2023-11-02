import Link from "next/link"
import cn from "classnames"
import { ExtraClassNames } from "@/app/types/types"

export const UserIcon = ({ className }: { className?: string }) => {
  return (
    <li>
      <Link href='/user-panel' className=
        {cn(
          'nav__user',
          className === ExtraClassNames.TRANSPARENT && 'nav__user--transparent',
          'w-5',
          'h-5',
          'block'
        )}>
      </Link>
    </li>
  )
}
