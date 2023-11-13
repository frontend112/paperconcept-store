import { FC } from "react";
import cn from "classnames";
import { ArrowProps, DIRECTIONS } from "@/app/types/types";

export const Arrow: FC<ArrowProps> = ({
  direction,
  handleArrowClick,
  isLoading,
  isMobilemenuclicked,
  children,
}) => (
  <div className={cn(
    'arrow',
    'top-1/2',
    'absolute',
    'translate-y-[-50%]',
    'hover: cursor-pointer',
    !isMobilemenuclicked && 'z-10',
    direction === DIRECTIONS.LEFT ? 'left-0' : 'right-0',
  )}
  >
    <div className="
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
)

