export enum DIRECTIONS {
  LEFT,
  RIGHT
}

export interface ArrowProps {
  direction: DIRECTIONS;
  changeBg: (direction: DIRECTIONS) => void;
  isLoading: boolean;
}