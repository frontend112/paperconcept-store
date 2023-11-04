import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export enum DIRECTIONS {
  LEFT,
  RIGHT,
  UNKNOWN,
}

export interface ArrowProps {
  direction: DIRECTIONS;
  handleArrowClick: (direction: DIRECTIONS) => void;
  isLoading: boolean;
  children: ReactNode;
}

export interface BackgroundType {
  id: number,
  src: StaticImageData,
  name: string,
  slug: string,
}

export interface BackgroundsProps {
  bgCount: number,
  animationsDetails: {
    direction: DIRECTIONS,
    isActive: Boolean,
  }
}

export interface ProductType {
  name: string,
  price: number,
  src: string,
  id: string,
}

export interface AddedProduct extends ProductType {
  quantity: number;
}

export enum ExtraClassNames {
  TRANSPARENT = "transparent",
}

export interface MenuDevicesProps {
  className?: ExtraClassNames,
  handleCartClick: () => void,
}