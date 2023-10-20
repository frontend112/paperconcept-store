import { StaticImageData } from "next/image";

export enum DIRECTIONS {
  LEFT,
  RIGHT,
  UNKNOWN,
}

export interface ArrowProps {
  direction: DIRECTIONS;
  changeBg: (direction: DIRECTIONS) => void;
  isLoading: boolean;
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
  price: string,
  src: string,
  id: string,
}

export enum ExtraClassnames {
  transparent,
}
