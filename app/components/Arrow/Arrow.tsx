import { ArrowProps, DIRECTIONS } from "@/app/types/types";
import React, { FC } from 'react'
import cn from 'classnames'

export const Arrow: FC<ArrowProps> = ({ direction, changeBg, isLoading }) => (
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
      w-10
      h-10
      "
    >
      <button
        disabled={isLoading}
        onClick={() => changeBg(direction)}
      >
        {direction === DIRECTIONS.LEFT && "<"}
        {direction === DIRECTIONS.RIGHT && '>'}
      </button>
    </div>
  </div>
)

