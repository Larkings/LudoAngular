import {Color} from "./Color.enum";
import {Pawn} from "./Pawn";

export class Player {
  public id: number;          // global player-id, shall be unique across the system
  public name: string;
  public color: Color;
  public startPosition: number;
/*  public pawns: number[][];   // replace by thePawns below: true references to pawn objects*/
  public thePawns: Pawn[];


  public isNext: boolean;     // tracking the turns is the responsibility of the board rather than of the player itself
  public isWinner: boolean;

  constructor(
              id?: number,
              name?: string,
              color?: Color,
              pawns?: number[][],
              isNext?: boolean,
              isWinner?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.thePawns = new Array<Pawn>(4)
    this.resetPawns();
  }

  public get colorString() { return this.color.toString() }

  public resetPawns() {
    for (let i = 0; i < 4; i++) {
      // for now, calculate the pawn-id from the player-id.
      // will be done by back-end later
      this.thePawns[i] = new Pawn(null, this);
      console.log("resetPawns - Player.ts")
    }
  }

  get numPawnsInPlay() {
    let num = 0;
    for (let pawn of this.thePawns) {
      if (pawn.currentPositionIndex >= 0) num++;
      console.log("numPawnInPlay if state - Player.ts: " + "PLAYER ID: " + this.id + " " + "NUM PAWNS: "+ this.numFreePawns)
    }
    return num;
    console.log("numPawnInPlay return")
  };

  get numFreePawns() {
    let num = 0;
    for (let pawn of this.thePawns) {
      if (pawn.currentPositionIndex < 0) num++;
    }
    return num;
  };

  getFreePawn() {
    for (let pawn of this.thePawns) {
      if (pawn.currentPositionIndex < 0) return pawn;
      console.log("getFreePawn if statement" )
    }
    return null;
    console.log("getFreePawn return null")
  };





}
