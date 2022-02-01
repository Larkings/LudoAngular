import {getRandomInt} from "./functions/getRandomInt";


export class Dice {

  private previousResult: number = 0;
  constructor() {
  }

  /**
   * roll dice and returns a random integer number between 1-6
   */
  public static rollDice(): number {
    let result = getRandomInt(1, 7);
    /*let result = getRandomInt(6, 7);*/

    return result;
  }

  public roll() {
    this.previousResult = getRandomInt(1, 7);
    return this.previousResult;
  }

  public getDiceValue(){
    return this.previousResult;
  }

}


