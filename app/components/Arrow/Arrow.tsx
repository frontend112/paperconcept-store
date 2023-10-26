import { ArrowProps, DIRECTIONS } from "@/app/types/types";
import React, { FC } from 'react'
import cn from 'classnames'

export const Arrow: FC<ArrowProps> = ({
  direction,
  handleArrowClick,
  isLoading,
  children,
}) => (
  <div className={cn(
    'absolute',
    'top-[50%]',
    'hover: cursor-pointer',
    'translate-y-[-50%]',
    direction === DIRECTIONS.LEFT ? 'left-5' : 'right-5'
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

