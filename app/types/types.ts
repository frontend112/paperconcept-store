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