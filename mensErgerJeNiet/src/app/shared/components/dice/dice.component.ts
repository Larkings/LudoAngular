import { Component, OnInit } from '@angular/core';
import {Dice} from "../../../models/Dice";


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})

export class DiceComponent implements OnInit{

  public diceValue: number = 1 ;

  constructor() {}

  ngOnInit(): void {
  console.log(this.diceValue)
  }

  rollDice(){
    this.diceValue= Dice.rollDice()
    console.log(this.diceValue)
  }
}
