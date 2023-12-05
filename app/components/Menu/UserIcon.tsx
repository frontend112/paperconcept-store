import Link from "next/link";
import cn from "classnames";
import { ExtraClassNames } from "@/app/types/types";
import { useSession } from "next-auth/react";

export const UserIcon = ({ className }: { className?: string }) => {
  const session = useSession();
  if (session.data?.user)
    return (
      <li>
        <Link
          href="/user-panel"
          className={cn(
            "nav__user",
            className === ExtraClassNames.TRANSPARENT &&
              "nav__user--transparent",
            "w-5",
            "h-5",
            "block"
          )}
        ></Link>
      </li>
    );
  return (
    <li>
      <Link
        href="/sign-up"
        className={cn(
          "nav__user",
          className === ExtraClassNames.TRANSPARENT && "nav__user--transparent",
          "w-5",
          "h-5",
          "block"
        )}
      ></Link>
    </li>
  );
};
