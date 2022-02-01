import {Color} from "./Color.enum";
import {Pawn} from "./Pawn";

export class Player {
  public id: number;          // global player-id, shall be unique across the system
  public name: string;
  public playerNum: string;
  public color: Color;
  public startPosition: number;
  public thePawns: Pawn[];


  public savedPawns: Pawn[];

  public isNext: boolean;     // tracking the turns is the responsibility of the board rather than of the player itself
  public isWinner: boolean;

  constructor(
              id?: number,
              name?: string,
              color?: Color,
              playerNum?: string,
              pawns?: number[][],
              isNext?: boolean,
              isWinner?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.playerNum= playerNum;
    this.thePawns = new Array<Pawn>(4)
    this.resetPawns();
    this.isWinner = false;
  }

  public get colorString() { return this.color.toString() }

  public resetPawns() {
    for (let i = 0; i < 4; i++) {
      // for now, calculate the pawn-id from the player-id.
      // will be done by back-end later
      this.thePawns[i] = new Pawn(this);
    }
  }

  public makeWinner(){
    for (let pawn of this.thePawns){
      if(pawn.clickable == false && pawn.saved == true){
        this.thePawns.map(pawn =>
        {
          return {
            clickable: pawn.clickable,
            saved: pawn.saved,
            player: pawn.player,
            currentPositionIndex: pawn.currentPositionIndex,
            nextPositionIndex: pawn.nextPositionIndex
          }
        }).forEach(pawn => this.savedPawns.push(pawn));
        console.log("//savedPawn Array List");
        console.log(this.savedPawns);
      }
      if (this.savedPawns.length == 4){
        this.isWinner = true;
      }
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
    console.log("resetPawns - Player.ts " + this.resetPawns() )

  };





}
