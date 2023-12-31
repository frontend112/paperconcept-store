"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import cn from "classnames";

import { ExtraClassNames } from "@/app/types/types";
import { Cart } from "../Cart/Cart";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

type Props = {
  className?: ExtraClassNames;
  setIsarrowhidden: Dispatch<SetStateAction<boolean>>;
};

export const Menu = ({ className, setIsarrowhidden }: Props) => {
  const [isCartHidden, setIscarthidden] = useState(true);
  const cartELement = useRef<HTMLDivElement>(null);

  const handleCartClick = () => {
    if (isCartHidden) {
      cartELement.current?.classList.add("animate-show-cart");
      cartELement.current?.classList.remove("animate-hide-cart");
    } else {
      cartELement.current?.classList.add("animate-hide-cart");
      cartELement.current?.classList.remove("animate-show-cart");
    }

    setTimeout(() => {
      setIscarthidden((state) => !state);
    }, 500);
    if (setIsarrowhidden) {
      setIsarrowhidden((state) => !state);
    }
  };

  return (
    <div
      className={cn(
        "z-10",
        "w-full",
        "absolute",
        className === ExtraClassNames.TRANSPARENT && "text-white"
      )}
    >
      <DesktopMenu handleCartClick={handleCartClick} className={className} />

      <MobileMenu
        handleCartClick={handleCartClick}
        setIsarrowhidden={setIsarrowhidden}
      />

      <Cart
        isCartHidden={isCartHidden}
        cartELement={cartELement}
        handleCartClick={handleCartClick}
      />
    </div>
  );
};
