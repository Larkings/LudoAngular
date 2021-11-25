import {Pawn} from "../../../models/Pawn";

export class Position {
  pawn: Pawn;
  x: number;
  y: number;
  hasPawn: boolean =false;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
