import Link from "next/link"
import cn from "classnames"
import { ExtraClassNames } from "@/app/types/types"

export const Logo = ({ classNames }: { classNames?: ExtraClassNames }) => {
  return (<div className="nav__logo-wrapper w-28 h-10">
    <Link
      className={cn(
        'w-28',
        'h-10',
        'block',
        'bg-cover',
        'bg-no-repeat',
        classNames === ExtraClassNames.TRANSPARENT ? 'nav__logo' : 'nav__logo--transparent'
      )}
      href="/"
    ></Link>
  </div>
  )
}
