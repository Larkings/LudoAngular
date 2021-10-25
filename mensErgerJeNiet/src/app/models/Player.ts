import {Color} from "./Color.enum";

export class Player{

    constructor(
    public id: number,
    public name: string,
    public color: Color,
    public pawnAmount: number
  ){}


}
