import {Player} from "./Player";

export class Pawn {
  player: Player;             // this is the player owning the pawn
  currentPosition: number;    // this is the index in the board positions array where this pawn currently is located
                              // -1 if the pawn is not on the board (yet)
  width: number;              // please remove or add a comment what is the purpose of this attribute
                              // view related scaling of visuals should not be in a model class
  height: number;             // please remove or add a comment what is the purpose of this attribute
  x: number;                  // probably obsolete if you use a relative position index
  y: number;
  deltaX: number;             // please remove or add a comment what is the purpose of this attribute
  deltaY: number;             // please remove or add a comment what is the purpose of this attribute
  maxSpeed: number =1;        // please remove or add a comment what is the purpose of this attribute
  speed : number = 0          // please remove or add a comment what is the purpose of this attribute
  element: any;               // specific physical view info does not belong in a model class
  canvas: any;                // specific physical view info does not belong in a model class
  ctx: any;                   // specific physical view info does not belong in a model class

  constructor(config?, player?) {
    this.player = player;
    this.currentPosition = -1;

    // below code should be removed; their should be not html info in attributes of a model classes
    if (config != null) {
      this.element = config.element;
      this.canvas = this.element.querySelector("game-canvas")
      this.ctx = this.canvas.getContext("2d");
    }
  }

  // below code should be removed or changed such that the view canvas element comes in via a parameter.
  drawPawn(canvas?) {
    // let ctx = canvas.getContext("2d");
    this.ctx.beginPath();
    this.x = 50;
    this.y = 50 ;
    this.ctx.arc(this.x + 25, this.y + 25,
      20, 0, Math.PI * 2, true);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }
}


