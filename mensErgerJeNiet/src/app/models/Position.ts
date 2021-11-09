import {Pawn} from "./Pawn";

export class Position {
  x: number;
  y: number;
  pawn: Pawn;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.pawn = null;
  }
}
