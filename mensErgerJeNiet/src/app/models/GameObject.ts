export class GameObject{
  x = 0;
  y = 0;
  constructor(config) {
  this.x = config.x || 0;
    this.y = config.y || 0;
  }

}
