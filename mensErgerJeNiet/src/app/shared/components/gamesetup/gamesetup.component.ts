import {Component, OnInit} from '@angular/core';
import {Player} from "../../../models/Player";
import {Color} from "../../../models/Color.enum";
import {Dice} from "../../../models/Dice";


@Component({
  selector: 'app-gamesetup',
  templateUrl: './gamesetup.component.html',
  styleUrls: ['./gamesetup.component.css']
})
export class GamesetupComponent implements OnInit {
  // let dice:  Dice;

  // pawnBoardId = {
  //   red: [0,1,2,3],
  //   yellow: [4,5,6,7],
  //   green: [8,9,10,11],
  //   blue: [12,13,14,15],
  //
  // };

  constructor() {

  }

  ngOnInit(): void {
  }

  selectDice(){

  }


}
