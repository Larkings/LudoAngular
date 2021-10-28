import {Color} from "./Color.enum";

export class Player{
  public id: number;
  public name: string;
  public color: Color;
  public pawns: number[][];

  public isNext: boolean;
  public isWinner: boolean;

  constructor(id: number,
              name: string,
              color: Color,
              pawns: number[][],
              isNext: boolean,
              isWinner: boolean
  ){}
}
