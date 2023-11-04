import Link from "next/link"
import { usePathname } from "next/navigation"
import cn from "classnames"

import { ExtraClassNames } from "@/app/types/types"

export const Logo = ({ className }: { className?: ExtraClassNames }) => {
  const pathName = usePathname();
  return (<div className="nav__logo-wrapper w-28 h-10">
    <Link
      className={cn(
        'w-29', 'h-11',
        'block',
        'bg-contain', 'bg-no-repeat',
        className === ExtraClassNames.TRANSPARENT ? 'nav__logo--transparent' : 'nav__logo'
      )}
      href="/"
      onClick={() => {
        if (pathName === '/') {
          window.location.reload();
        }
      }}
    />
  </div>
  )
}
