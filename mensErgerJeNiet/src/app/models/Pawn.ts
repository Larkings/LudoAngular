import {Player} from "./Player";

export class Pawn {
  player: Player;               // this is the player owning the pawn
  currentPositionIndex: number; // this is the index in the board positions array where this pawn currently is located
                                // -1 if the pawn is not on the board (yet)
  nextPositionIndex: number;
  clickable: boolean = true;
  saved: boolean = false;

  constructor(player:Player) {
    this.player = player;
    this.currentPositionIndex = -1;
  }
}
