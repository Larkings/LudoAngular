import {Component, OnInit} from '@angular/core';
import {Board} from "../../../models/Board";
import {Dice} from "../../../models/Dice";
import {Pawn} from "../../../models/Pawn";
import {Player} from "../../../models/Player";
import {Color} from "../../../models/Color.enum";
import {Position} from "../../../models/Position";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private static DIMENSION = 6;

  public board: Board;
  public previousTurnMessage: string = null;
  public dice: Dice;    // only temporarily here, should be in backend only

  get positions() {
    return this.board.positions;
  }
  get viewPortDimension() { return 2*BoardComponent.DIMENSION+4; }

  get playerWithTurn(): Player {
    return this.board?.playerWithTurn;
  }

  constructor() {
    this.board = new Board(BoardComponent.DIMENSION);
    this.dice = new Dice();

  }


  ngOnInit(): void {
    // for now we don't use the id-s yet.
    // That will become relevant when syncing with backend, and tracking multiple games.
    this.board.addPlayer(new Player(0,"Bao",Color.RED));
    this.board.addPlayer(new Player(0,"Jorden",Color.BLUE));
    this.board.addPlayer(new Player(0,"Kevin",Color.GREEN));
    this.board.addPlayer(new Player(0,"Lloyd",Color.YELLOW));
  }

  onPositionClick(position: Position) {

  }

  onPawnClick(pawn: Pawn) {
    if (this.board.latestDiceResult > 0 && pawn.player == this.playerWithTurn) {
      pawn.currentPosition = (pawn.currentPosition + this.board.latestDiceResult) % this.board.trackLength;
      this.board.nextTurn();
    }
  }

  onRollDice() {
    // should be changed into a backend request for a roll and subsequent board update
    this.board.latestDiceResult = this.dice.roll();
    this.previousTurnMessage = null;
    // this all should be done in the backend later
    if (this.board.latestDiceResult == 6 && this.board.placeAFreePawnAtStartPosition(this.playerWithTurn)) {
      this.board.latestDiceResult = 0;
      this.previousTurnMessage = `${this.playerWithTurn.name} has rolled 6; a new pawn has been placed at your start position`;
    } else if (this.playerWithTurn.numPawnsInPlay == 0) {
        this.previousTurnMessage = `${this.playerWithTurn.name} has rolled ${this.board.latestDiceResult}, but had no pawns in play; turn was ended`;
        this.board.nextTurn();
    }
    return;
  }

}
