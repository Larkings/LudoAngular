import {Component, OnInit} from '@angular/core';
import {Board} from "../../../models/Board";
import {Home} from "../../../models/Home";
import {Dice} from "../../../models/Dice";
import {Pawn} from "../../../models/Pawn";
import {Player} from "../../../models/Player";
import {Color} from "../../../models/Color.enum";
import {Position} from 'src/app/models/Position';
import {Path} from "../../../models/Path";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  private static TRACK_LENGTH = 5;
  private static TRACK_WIDTH =2;

  public board: Board;
  public previousTurnMessage: string = null;
  public home: Home;
  public dice: Dice;    // only temporarily here, should be in backend only
  public path: Path;
  public nextPlayer: boolean = true;
  public nextPositionIndex: number = 0;
  public positionHasPawn: boolean = false; //checks if position has a pawn already
  public previousPositionIndex: number = 0
  public nextPosition: Position;
  public nextPositionHasOpponentPawn: boolean = false;
  public nextPositionHasSameColor: boolean = false;
  public pawnPlayingRed: Pawn[];
  public pawnPlayingBlue: Pawn[];
  public pawnPlayingGreen: Pawn[];
  public pawnPlayingYellow: Pawn[];
  public positions: Position[];
  public winningPathRed: Position[];
  public winningPathBlue: Position[];
  public winningPathGreen: Position[];
  public winningPathYellow: Position[];
  public savedPawns: Pawn[];

  get viewPortDimension() {
    return 2 * BoardComponent.TRACK_LENGTH + BoardComponent.TRACK_WIDTH + 2;
  }

  get playerWithTurn(): Player {
    return this.board?.playerWithTurn;
  }

  constructor() {
    this.board = new Board(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH);
    this.dice = new Dice();
    this.path = new Path();
    this.setupPositions(BoardComponent.TRACK_LENGTH, BoardComponent.TRACK_WIDTH);
/*    this.setupHomeBase(BoardComponent.TRACK_BASE_L, BoardComponent.TRACK_BASE_W);*/
  }


  ngOnInit(): void {
    this.board.addPlayer(new Player(1,"Bao",Color.RED));
    this.board.addPlayer(new Player(2,"Jorden",Color.BLUE));
    this.board.addPlayer(new Player(3,"Kevin",Color.GREEN));
    this.board.addPlayer(new Player(4,"Lloyd",Color.YELLOW));
  }

  onPositionClick(position: Position) {
  }

  //check if next Position has the same color pawn
  sameColor(pawn1: Pawn, pawn2: Pawn): boolean {
    if (pawn1.player.color === pawn2.player.color) {
      return true
    } else return false;
  }

  showAllPosInfo(){
    for(let i = 0;i<=this.positions.length;i++){
      console.log(this.positions[i]);
    }
  }

  showAllHasPawn(){
    for(let i = 0;i<=this.positions.length;i++){
      if(this.positions[i].hasPawn == true){
        console.log(this.positions[i]);
      }
    }
  }

  pawnInGameArray(pawn: Pawn){
    if(pawn.player.color === "RED" && pawn.currentPositionIndex >=0){
      this.pawnPlayingRed.push(pawn);
      console.log(this.pawnPlayingRed);
    }
    if(pawn.player.color === "BLUE" && pawn.currentPositionIndex >=0){
      this.pawnPlayingBlue.push(pawn);
      console.log(this.pawnPlayingBlue);
    }
    if(pawn.player.color === "GREEN" && pawn.currentPositionIndex >=0){
      this.pawnPlayingGreen.push(pawn);
      console.log(this.pawnPlayingGreen);
    }
    if(pawn.player.color === "YELLOW" && pawn.currentPositionIndex >=0){
      this.pawnPlayingYellow.push(pawn);
      console.log(this.pawnPlayingYellow);
    }
  }

makeWinner(pawn){
    if (pawn.player.thePawns.length ===0){
      pawn.player.hasWon++;
      alert("Player with color " + pawn.player.color + " named " + '"'+ pawn.player.name + '"'+ " has won!" + "Player has won " + pawn.player.hasWon + " times!");
      if (confirm("Restart Game!")){
        location.reload();
      }
    }
}



  onPawnClick(pawn: Pawn) {
    this.nextPositionIndex = (pawn.currentPositionIndex + this.dice.getDiceValue());
    let pawn1: Pawn = this.positions[this.nextPositionIndex].pawn;
    this.pawnInGameArray(pawn);
    if (
      this.board.latestDiceResult > 0 &&
      pawn.player == this.playerWithTurn &&
      pawn.clickable == true &&
      (this.positions[this.nextPositionIndex].hasPawn === false)
    ) {

      console.log(pawn.player.name + " has selected pawn on position: " + pawn.currentPositionIndex);
      console.log(pawn.player.name + " You can move your pawn to position : " + this.nextPositionIndex);


      //old position has no pawn after move
      this.previousPositionIndex = pawn.currentPositionIndex;
      this.positions[this.previousPositionIndex].hasPawn = false;
      this.positions[this.previousPositionIndex].pawn = null;
      console.log("next position is free to move :  " + !this.positions[this.nextPositionIndex].hasPawn);



      //move pawn to next free position

      this.playMovePawnSound();
      pawn.currentPositionIndex = this.nextPositionIndex;

      this.path.lockPawn(pawn, this.positions, this.previousPositionIndex, this.nextPositionIndex,this.dice.getDiceValue());

      this.positions[this.nextPositionIndex].pawn = pawn;
      this.positions[this.nextPositionIndex].hasPawn = true;
      console.log(pawn.player.name + " has moved pawn to position:   " + pawn.currentPositionIndex);
      this.board.nextTurn(this.nextPlayer);

      this.path.overflow(pawn, this.positions, this.previousPositionIndex, this.nextPositionIndex,this.dice.getDiceValue());
      this.path.deletePawnRBGY(pawn, this.positions, this.previousPositionIndex, this.nextPositionIndex);
      this.makeWinner(pawn);
      console.log("Show all positions with hasPawn = true");
      this.showAllHasPawn();
    }
    else{
          if (this.sameColor(pawn, pawn1)) {
          this.playNoMateSound();
          console.log("Your current pawn color: " + pawn.player.color)
          console.log("killable pawn color: " + pawn1.player.color)
          console.log(pawn.player.name + " has selected pawn on position: " + pawn.currentPositionIndex);
          console.log("killable pawn is of same color. Choose another pawn!!");
          } else{
            this.previousPositionIndex = pawn.currentPositionIndex;
            this.positions[this.previousPositionIndex].hasPawn = false;
            this.positions[this.previousPositionIndex].pawn = null;
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
    this.board.latestDiceResult = this.dice.roll();
    this.previousTurnMessage = null;
    if
    (
      this.board.latestDiceResult == 6 &&
      this.board.placeAFreePawnAtStartPosition(this.playerWithTurn) &&
      this.positions[this.playerWithTurn.startPosition].hasPawn === false
    )
    {
      this.board.latestDiceResult = 0;
      this.playNewPawnSound();
      this.previousTurnMessage = `${this.playerWithTurn.name} has rolled 6; a new pawn has been placed at your start position`;
      this.positions[this.playerWithTurn.startPosition].hasPawn = true;
    } else
      if
      (
        this.playerWithTurn.numPawnsInPlay == 0
      )
      {
        this.previousTurnMessage = `${this.playerWithTurn.name} has rolled ${this.board.latestDiceResult}, but had no pawns in play; turn was ended`;
        this.board.nextTurn(this.nextPlayer);
    }else
      if
      (
        this.board.latestDiceResult == 6 &&
        this.board.placeAFreePawnAtStartPosition(this.playerWithTurn) &&
        this.positions[this.playerWithTurn.startPosition].hasPawn === true
      )
      {
        this.pawnPlayingRed[0].currentPositionIndex =
          this.pawnPlayingRed[0].currentPositionIndex +
          this.board.latestDiceResult
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

