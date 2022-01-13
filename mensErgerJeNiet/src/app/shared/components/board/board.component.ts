import {Component, OnInit} from '@angular/core';
import {Board} from "../../../models/Board";
import {Home} from "../../../models/Home";
import {Dice} from "../../../models/Dice";
import {Pawn} from "../../../models/Pawn";
import {Player} from "../../../models/Player";
import {Color} from "../../../models/Color.enum";
import {Position} from 'src/app/models/Position';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private static TRACK_LENGTH = 5;
  private static TRACK_WIDTH =2;
  ///////////////////////////
/*
  private static TRACK_BASE_L = 1;
  private static TRACK_BASE_W = 0;
*/

  public board: Board;
  public previousTurnMessage: string = null;
  public home: Home;
  public dice: Dice;    // only temporarily here, should be in backend only
  public nextPlayer: boolean = true;
  public nextPositionIndex: number = 0;
  public positionHasPawn: boolean = false; //checks if position has a pawn already
  public previousPositionIndex: number = 0
  public nextPosition: Position;
  public nextPositionHasOpponentPawn: boolean = false;
  public nextPositionHasSameColor: boolean = false;

  // list of view coordinates for the trackpositions on the board
  public positions: Position[];
  public winningPathRed: Position[];
  public winningPathBlue: Position[];
  public winningPathGreen: Position[];
  public winningPathYellow: Position[];

  get viewPortDimension() {
    return 2 * BoardComponent.TRACK_LENGTH + BoardComponent.TRACK_WIDTH + 2;
  }

  get playerWithTurn(): Player {
    return this.board?.playerWithTurn;
  }

  constructor() {
    this.board = new Board(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH);
    this.dice = new Dice();
    this.setupPositions(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH);
/*    this.setupHomeBase(BoardComponent.TRACK_BASE_L, BoardComponent.TRACK_BASE_W);*/
  }


  ngOnInit(): void {
    // for now we don't use the id-s yet.
    // That will become relevant when syncing with backend, and tracking multiple games.
    this.board.addPlayer(new Player(1,"Bao",Color.RED));/*
    this.board.addPlayer(new Player(2,"Jorden",Color.BLUE));
    this.board.addPlayer(new Player(3,"Kevin",Color.GREEN));
    this.board.addPlayer(new Player(4,"Lloyd",Color.YELLOW));*/
  }

  onPositionClick(position: Position) {
  }

  //check if next Position has the same color pawn
  sameColor(pawn1: Pawn, pawn2: Pawn): boolean {
    if (pawn1.player.color === pawn2.player.color) {
      return true
    } else return false;
  }

  TESTERMOVEPAWN(pawnRed: Pawn){
    if (pawnRed.player.color === "RED" && pawnRed.currentPositionIndex == 5 && this.positions[52].hasPawn == false){

      this.positions[5].hasPawn = false;
      this.positions[5].pawn = null;
      this.positions[40].hasPawn = true;
      this.positions[40].pawn = pawnRed;
      pawnRed.currentPositionIndex = 40;

      /*this.positions[52].hasPawn = true;*/
      console.log("WINNINGPATH TEST QUE "+ "COLOR TEST: " )
      console.log(this.positions[1]);
      console.log(this.positions[2]);
      console.log(this.positions[5]);
      console.log(this.positions[40]);
      console.log(this.positions[45]);
      console.log("END TESTER?????????????")
    }
  }
// 47 is the last point for red
  // 42 red trow six loop is done

/*  blockPawnsFromLoopingTheBoard(pawn:Pawn){
    if(pawn.player.color === "RED" && pawn.currentPositionIndex > 44){
      this.positions[1].hasPawn = false;
      this.positions[1].pawn = null;

/!*      console.log("START BLOCKER");
      console.log("CUrrentpos before move: "+ pawn.currentPositionIndex);*!/

      this.positions[pawn.currentPositionIndex].hasPawn = false;
      this.positions[pawn.currentPositionIndex + this.dice.getDiceValue()].hasPawn = true;
      this.positions[pawn.currentPositionIndex + this.dice.getDiceValue()].pawn = pawn;
/!*      console.log(this.positions[pawn.currentPositionIndex + this.dice.getDiceValue()].hasPawn);*!/

      pawn.currentPositionIndex = (48);
      console.log("BLOCK LOOP!!!!")
      /!*pawn.currentPositionIndex = (pawn.currentPositionIndex + this.dice.getDiceValue());*!/
/!*      this.nextPositionIndex = pawn.currentPositionIndex;*!/

/!*      console.log("CUrrentpos "+ pawn.currentPositionIndex);
      console.log("dice value: " + this.dice.getDiceValue());
      console.log("Next pos: " + this.nextPositionIndex);
      console.log("pawn current + dice value: " + (pawn.currentPositionIndex + this.dice.getDiceValue()));
      console.log("POSITION INFO: ");
      console.log( this.positions[1]);
      console.log(this.positions[2]);
      console.log(this.positions[47]);
      console.log(this.positions[48]);
      console.log(this.positions[52]);*!/
    }
  }*/

testMoveOnPath(pawn: Pawn){
    if(pawn.player.color === "RED" && pawn.currentPositionIndex >47){
      this.nextPositionIndex = (pawn.currentPositionIndex + this.dice.getDiceValue());
    }
}

  onPawnClick(pawn: Pawn) {
    this.nextPositionIndex = (pawn.currentPositionIndex + this.board.latestDiceResult) % this.board.totalTrackLength;
    let pawn1: Pawn = this.positions[this.nextPositionIndex].pawn;
    //check if next position has no pawn and move the pawn to next position
    if (this.board.latestDiceResult > 0 && pawn.player == this.playerWithTurn && !(pawn.currentPositionIndex >= 47) &&(this.positions[this.nextPositionIndex].hasPawn === false)) {

      console.log(pawn.player.name + " has selected pawn on position: " + pawn.currentPositionIndex);
      console.log(pawn.player.name + " You can move your pawn to position : " + this.nextPositionIndex)

      //old position has no pawn after move
      this.previousPositionIndex = pawn.currentPositionIndex;
      this.positions[this.previousPositionIndex].hasPawn = false;
      this.positions[this.previousPositionIndex].pawn = null;
      console.log("next position is free to move :  " + !this.positions[this.nextPositionIndex].hasPawn);

      //move pawn to next free position

      this.playMovePawnSound();
      pawn.currentPositionIndex = this.nextPositionIndex;
      //assign pawn in positions array and mark that position has a pawn
      this.positions[this.nextPositionIndex].pawn = pawn;
      this.positions[this.nextPositionIndex].hasPawn = true;
      console.log(pawn.player.name + " has moved pawn to position:   " + pawn.currentPositionIndex);

      // console.log("next position is free to move :  " + this.positions[this.nextPositionIndex].hasPawn);
      this.TESTERMOVEPAWN(pawn);
      this.board.nextTurn(this.nextPlayer);


    }if(pawn.player.color === "RED" && pawn.currentPositionIndex >= 45 && this.dice.roll() > 2){
      this.positions[this.previousPositionIndex].hasPawn = false;
      this.positions[this.previousPositionIndex].pawn = null;
      console.log("TESTERSDSDSDS");
      console.log(45 + this.dice.roll());
      console.log(pawn.currentPositionIndex + this.dice.roll());
      console.log("TESTERSDSDSDS");
      let value = 45 + this.dice.roll();
      this.positions[value].hasPawn = true;
      this.positions[value].pawn = pawn;
      this.nextPositionIndex = value;
      pawn.currentPositionIndex = value;

    }else{


      //check if killable pawn is of same color on next position


          if (this.sameColor(pawn, pawn1)) {
          this.playNoMateSound();
          console.log("Your current pawn color: " + pawn.player.color)
          console.log("killable pawn color: " + pawn1.player.color)

          console.log(pawn.player.name + " has selected pawn on position: " + pawn.currentPositionIndex);
          console.log("killable pawn is of same color. Choose another pawn!!");

          // this.nextPlayer = false;
         // this.board.nextTurn(this.nextPlayer);

          }

        else{
            //old position has no pawn after move
            this.previousPositionIndex = pawn.currentPositionIndex;
            this.positions[this.previousPositionIndex].hasPawn = false;
            this.positions[this.previousPositionIndex].pawn = null;
            //move opponent pawn to his homebase
            //KILL opponent pawn
            pawn1.currentPositionIndex = -1;

            this.playPunchSound();
            this.playPainSound();

            //move selected pawn to new position

            pawn.currentPositionIndex = this.nextPositionIndex;
            this.positions[this.nextPositionIndex].pawn = pawn;
            this.positions[this.nextPositionIndex].hasPawn = true;
            console.log("pawn.currentPositionIndex: " + pawn.currentPositionIndex);

            console.log("Congrats!! " + pawn.player.name + ".You have moved to position " + pawn.currentPositionIndex +
              " and killed a pawn of " + pawn1.player.name!!);
            this.board.nextTurn(this.nextPlayer);
        }
      }


  }

  playNoMateSound(){
    let audio = new Audio("../../../assets/audio/nomate.wav");
    audio.load();
    audio.play();
  }

  playPainSound(){
    let audio = new Audio("../../../assets/audio/pain.wav");
    audio.load();
    audio.play();
  }

  playPunchSound(){
    let audio = new Audio("../../../assets/audio/punch.wav");
    audio.load();
    audio.play();
  }
  playNewPawnSound(){
  let audio = new Audio("../../../assets/audio/mixkit-arcade-bonus-229.wav");
  audio.load();
  audio.play();
}

  playMovePawnSound(){
    let audio = new Audio("../../../assets/audio/movePawn.mp3");
    audio.load();
    audio.play();
  }

  onRollDice() {
    // should be changed into a backend request for a roll and subsequent board update
    this.board.latestDiceResult = this.dice.roll();
    this.previousTurnMessage = null;
    // this all should be done in the backend later
    if (this.board.latestDiceResult == 6/**/ && this.board.placeAFreePawnAtStartPosition(this.playerWithTurn)) {
      this.board.latestDiceResult = 0;
      //check if startposition is occupied by a pawn if so kill pawn
      // if(this.positions[this.playerWithTurn.startPosition].hasPawn= true){
      //   this.positions[this.playerWithTurn.startPosition].pawn.currentPositionIndex =-1;
      // }
      this.playNewPawnSound();
      this.previousTurnMessage = `${this.playerWithTurn.name} has rolled 6; a new pawn has been placed at your start position`;
      //mark start position has a pawn
      this.positions[this.playerWithTurn.startPosition].hasPawn = true;
    } else if (this.playerWithTurn.numPawnsInPlay == 0) {
        this.previousTurnMessage = `${this.playerWithTurn.name} has rolled ${this.board.latestDiceResult}, but had no pawns in play; turn was ended`;
        this.board.nextTurn(this.nextPlayer);
    }
    return;
  }

  private setupPositions(dimension: number, width: number) {
    let trackLength = 8 * dimension + 4 * width;
    this.positions = new Array<Position>(trackLength);
    // configure 8 straight track parts of size dimension


    for (let i = 0; i < dimension; i++) {

      // from red starting point to the right and then up

      this.positions[i] = new Position(1 + i, dimension + 1);

      this.positions[dimension + i] = new Position(dimension + 1, dimension + 1 - i);

      // from blue starting point downwards and then to the right

      this.positions[2 * dimension + width + i] = new Position(dimension + 1 + width, 1 + i);
      this.positions[3 * dimension + width + i] = new Position(dimension + 1 + width + i, dimension + 1);

      // from green starting point to the left and then downwards

      this.positions[4 * dimension + 2 * width + i] = new Position(2 * dimension + 1 + width - i, dimension + 1 + width);
      this.positions[5 * dimension + 2 * width + i] = new Position(dimension + 1 + width, dimension + 1 + width + i);

      // from yellow starting point upward and then to the left

      this.positions[6 * dimension + 3 * width + i] = new Position(dimension + 1, 2 * dimension + 1 + width - i);
      this.positions[7 * dimension + 3 * width + i] = new Position(dimension + 1 - i, dimension + 1 + width);

    }

    // configure 4 track parts just before the home entrance
    for (let i = 0; i < width; i++) {
      // before red player entrance
      this.positions[8 * dimension + 3 * width + i] = new Position(1, dimension + 1 + width - i);
      /*WIN*/
      this.winningPathRed = [
        this.positions[this.positions.length] = new Position(2, 7),
        this.positions[this.positions.length] = new Position(3, 7),
        this.positions[this.positions.length] = new Position(4, 7),
        this.positions[this.positions.length] = new Position(5, 7),
        this.positions[this.positions.length] = new Position(6, 7)
      ]
      // before blue player entrance
      this.positions[2 * dimension + i] = new Position(dimension + 1 + i, 1);
      /*WIN*/
      this.winningPathBlue= [
        this.positions[this.positions.length] = new Position(dimension + 2, 2),
        this.positions[this.positions.length] = new Position(dimension + 2, 3),
        this.positions[this.positions.length] = new Position(dimension + 2, 4),
        this.positions[this.positions.length] = new Position(dimension + 2, 5),
        this.positions[this.positions.length] = new Position(dimension + 2, 6)
      ]
      // before green player entrance
      this.positions[4 * dimension + width + i] = new Position(2 * dimension + 1 + width, dimension + 1 + i);
      /*WIN*/
      this.winningPathGreen = [
        this.positions[this.positions.length] = new Position(12, 7),
        this.positions[this.positions.length] = new Position(11, 7),
        this.positions[this.positions.length] = new Position(10, 7),
        this.positions[this.positions.length] = new Position(9, 7),
        this.positions[this.positions.length] = new Position(8, 7)
    ]
      // before yellow player entrance
      this.positions[6 * dimension + 2 * width + i] = new Position(dimension + 1 + width - i, 2 * dimension + 1 + width);
      /*WIN*/
      this.winningPathYellow = [
        this.positions[this.positions.length] = new Position(dimension + 2, 12),
        this.positions[this.positions.length] = new Position(dimension + 2, 11),
        this.positions[this.positions.length] = new Position(dimension + 2, 10),
        this.positions[this.positions.length] = new Position(dimension + 2, 9),
        this.positions[this.positions.length] = new Position(dimension + 2, 8)
    ]
      /*PURPLEDOT IN THE MIDDLE*/
      this.positions[this.positions.length] = new Position(7,7);
    }
    console.log("Winning path: ")
    console.log("GREEN: ");
    console.log(this.winningPathGreen);
    console.log("RED: ");
    console.log(this.winningPathRed);
    console.log("YELLOW: ");
    console.log(this.winningPathYellow);
    console.log("BLUE: ");
    console.log(this.winningPathBlue);

  }

}

