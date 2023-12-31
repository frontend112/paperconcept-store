import { FC } from "react";
import cn from "classnames";
import { ArrowProps, DIRECTIONS } from "@/app/types/types";

export const Arrow: FC<ArrowProps> = ({
  direction,
  handleArrowClick,
  isLoading,
  isArrowhidden,
  children,
}) => (
  <div
    className={cn(
      "arrow",
      "top-1/2",
      "absolute",
      "translate-y-[-50%]",
      "hover: cursor-pointer",
      !isArrowhidden && "z-10",
      direction === DIRECTIONS.LEFT ? "left-5" : "right-5"
    )}
  >
    <div
      className="
      flex justify-center items-center
      rounded-full
      bg-white
      "
    >
      <button
        className="w-10 h-10 font-thin text-xl"
        disabled={isLoading}
        onClick={() => handleArrowClick(direction)}
      >
        {children}
      </button>
    </div>
  </div>
);
