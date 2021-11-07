import {getRandomInt} from "./functions/getRandomInt";


export class Dice {

  constructor(public result: number) {
  }

  /**
   * roll dice and returns a random integer number between 1-6
   */
  public static rollDice(): number {
    let randomNumber = getRandomInt(1, 7);
    return randomNumber;
  }


  public getDiceValue(){
    return this.result;
  }

}


