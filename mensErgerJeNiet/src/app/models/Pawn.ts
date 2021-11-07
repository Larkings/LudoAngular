export class Pawn {

  width: number;
  height: number;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  maxSpeed: number =1;
  speed : number = 0
  element: any;
  canvas: any;
  ctx: any;

  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector("game-canvas")
    this.ctx = this.canvas.getContext("2d");
  }

  drawPawn() {
    this.ctx.beginPath();
    this.x = 50;
    this.y = 50 ;
    this.ctx.arc(this.x + 25, this.y + 25,
      20, 0, Math.PI * 2, true);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }
}


