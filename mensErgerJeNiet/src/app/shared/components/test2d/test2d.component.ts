import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Dice} from 'src/app/models/Dice';


@Component({
  selector: 'app-test2d',
  templateUrl: './test2d.component.html',
  styleUrls: ['./test2d.component.css']
})
export class Test2dComponent implements OnInit, OnChanges {

  @Input() diceValue: number;
  startPosX: number = 0;

  constructor() {

  }

  ngOnInit(): void {

    //Canvas Setup
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');


    const pawn = {
      x: 0,
      y: 0,
      size: 50,
      deltaX: 5,
      deltaY: 5,
      speed: 0,
    }

    //clear canvas function
    function clearCanvas() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    //draw tiles
    function drawTiles() {
      const tile = {w: 50, h: 50, x: 50, y: 50}
      for (let i = 0; i < 15; i++) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'green';
        ctx.strokeRect(tile.x, tile.y, tile.w, tile.h)
        tile.x += tile.w;
        // console.log("tile position y: " + tile.x);
        // console.log("tile position y: " + tile.y);
      }
    }

    function drawPawn() {
      // ctx.beginPath();

      pawn.x;
      pawn.y = 50;
      ctx.arc(pawn.x + 25, pawn.y + 25,
        20, 0, Math.PI * 2, true);
      ctx.fillStyle = 'red';
      ctx.fill();

    }

    // let diceValue= Dice.rollDice();
    // console.log("dice thrown: " + diceValue);
    // console.log("pawn.x: " + pawn.x);
    // console.log("pawn.y: " + pawn.y);

    console.log("paw.x: " + pawn.x);

    let dice = Dice.rollDice();
    console.log("dice thrown: " + dice);
    // console.log("dice thrown: " + this.diceValue);

    pawn.x = dice * 50;
    clearCanvas();
    drawTiles();
    drawPawn();

    // function update() {


    //   let dice = Dice.rollDice();
    //   console.log("dice thrown: " + dice);
    //   pawn.x = dice*50;
    //   clearCanvas();
    //   drawTiles();
    //   drawPawn();
    //   requestAnimationFrame(update);
    // }
    // update();
    // pawn.x += dice * 50;
    // drawTiles();
    // drawPawn();


  }


  onDiceClicked() {
    this.diceValue = Dice.rollDice();
    console.log("dice thrown: " + this.diceValue);
    ;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);


  }


}


function ngOnChanges(changes: any, SimpleChanges: any) {
  throw new Error('Function not implemented.');
}

function changes(changes: any, SimpleChanges: any) {
  throw new Error('Function not implemented.');
}

