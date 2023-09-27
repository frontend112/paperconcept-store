import { ArrowProps, DIRECTIONS } from "@/app/types/types";
import React, { FC } from 'react'
import cn from 'classnames'

export const Arrow: FC<ArrowProps> = ({ direction, changeBg, isLoading }) => (
  <div className={cn(
    'px-5',
    'rounded-full',
    'absolute',
    'top-[50%]',
    'hover: cursor-pointer',
    'translate-y-[-50%]',
    direction === DIRECTIONS.LEFT ? 'left-0' : 'right-0'
  )}
  >
    <button
      className={cn(
        'border-solid',
        'border-r-4',
        'border-b-4',
        'inline-block',
        'p-4',
        'border-black',
        direction === DIRECTIONS.LEFT ? 'rotate-[135deg]' : 'rotate-[-45deg]'
      )}
      disabled={isLoading}
      onClick={() => changeBg(direction)}
    />
  </div>
)

