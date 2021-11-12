import {Component, OnInit} from '@angular/core';
import {Board} from "../../../models/Board";
import {Dice} from "../../../models/Dice";
import {Pawn} from "../../../models/Pawn";
import {Player} from "../../../models/Player";
import {Color} from "../../../models/Color.enum";
import {Position} from "./Position";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private static TRACK_LENGTH = 7;
  private static TRACK_WIDTH = 2;

  public board: Board;
  public previousTurnMessage: string = null;
  public dice: Dice;    // only temporarily here, should be in backend only

  // list of view coordinates for the trackpositions on the board
  public positions: Position[];

  get viewPortDimension() { return 2*BoardComponent.TRACK_LENGTH+BoardComponent.TRACK_WIDTH+2; }

  get playerWithTurn(): Player {
    return this.board?.playerWithTurn;
  }

  constructor() {
    this.board = new Board(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH);
    this.dice = new Dice();
    this.setupPositions(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH)

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
      // check whether pawn has completed round, should not pass the start position again
      pawn.currentPositionIndex = (pawn.currentPositionIndex + this.board.latestDiceResult) % this.board.totalTrackLength;
      this.board.nextTurn();
    }
  }

  onRollDice() {
    // should be changed into a backend request for a roll and subsequent board update
    this.board.latestDiceResult = this.dice.roll();
    this.previousTurnMessage = null;
    // this all should be done in the backend later
    if (this.board.latestDiceResult == 6 && this.board.placeAFreePawnAtStartPosition(this.playerWithTurn)) {
      // also needs to check whether start position is free.
      this.board.latestDiceResult = 0;
      this.previousTurnMessage = `${this.playerWithTurn.name} has rolled 6; a new pawn has been placed at your start position`;
    } else if (this.playerWithTurn.numPawnsInPlay == 0) {
        this.previousTurnMessage = `${this.playerWithTurn.name} has rolled ${this.board.latestDiceResult}, but had no pawns in play; turn was ended`;
        this.board.nextTurn();
    }
    return;
  }

  private setupPositions(dimension: number, width: number) {
    let trackLength = 8*dimension + 4*width;
    this.positions = new Array<Position>(trackLength);
    // configure 8 straight track parts of size dimension
    for (let i = 0; i < dimension; i++) {
      // from red starting point to the right and then up
      this.positions[i] = new Position(1 + i, dimension + 1);
      this.positions[dimension + i] = new Position(dimension + 1, dimension + 1 - i);
      // from blue starting point downwards and then to the right
      this.positions[2*dimension + width + i] = new Position(dimension + 1+width, 1 + i);
      this.positions[3*dimension + width + i] = new Position(dimension + 1+width + i, dimension + 1);
      // from green starting point to the left and then downwards
      this.positions[4*dimension + 2*width + i] = new Position(2 * dimension + 1+width - i, dimension + 1+width);
      this.positions[5*dimension + 2*width + i] = new Position(dimension + 1+width, dimension + 1+width + i);
      // from orange starting point upward and then to the left
      this.positions[6*dimension + 3*width + i] = new Position(dimension + 1, 2 * dimension + 1+width - i);
      this.positions[7*dimension + 3*width + i] = new Position(dimension + 1 - i, dimension + 1+width);
    }
    // configure 4 track parts just before the home entrance
    for (let i = 0; i < width; i++) {
      // before red player entrance
      this.positions[8 * dimension + 3*width + i] = new Position(1, dimension + 1+width - i)
      // before blue player entrance
      this.positions[2 * dimension + i] = new Position(dimension + 1 + i, 1);
      // before green player entrance
      this.positions[4 * dimension + width + i] = new Position(2 * dimension + 1+width, dimension + 1 + i);
      // before orange player entrance
      this.positions[6 * dimension + 2*width + i] = new Position(dimension + 1+width - i, 2 * dimension + 1+width);
    }
  }

}
