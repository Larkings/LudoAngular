import {Pawn} from "./Pawn";
import {Position} from "./Position";
import {Player} from "./Player";





export class Path{

  public redCheck: Array<number> = [42,43,44,45,46,47];
  public pathR: Array<number> = [48,49,50,51,52,];
  public array: number[];
  public save: boolean = false;




redPathLockOne(pawn: Pawn, positions: Position[], prevPosNum: number, nextPosNum: number){
  console.log("redPathLockOne - start - one");
    if (positions[52].hasPawn === true && nextPosNum >= 51 && nextPosNum <=52 ){
      console.log("redPathLockOne - if state");
      positions[51].hasPawn = true;
      positions[51].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
      console.log("redPathLockOne - end - one");
      console.log(nextPosNum);
    }
}

  redPathLockTwo(pawn: Pawn, positions: Position[], prevPosNum: number, nextPosNum: number){
    console.log("redPathLockTwo - start -two");
    if (nextPosNum >= 50 && nextPosNum < 51 &&(positions[52].hasPawn === true && positions[51].hasPawn === true ) ){
      console.log("redPathLockTwo - if state");
      positions[50].hasPawn = true;
      positions[50].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
      console.log("redPathLockTwo - end - two");
      console.log(nextPosNum);
    }
  }

  redPathLockThree(pawn: Pawn, positions: Position[], prevPosNum: number, nextPosNum: number){
    console.log("redPathLockThree - start - three");
    if ((positions[52].hasPawn == true && positions[51].hasPawn === true && positions[50].hasPawn === true ) && nextPosNum >= 49&& nextPosNum <= 50){
      console.log("redPathLockThree - if state");
      positions[49].hasPawn = true;
      positions[49].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
      console.log("redPathLockThree - end - three");
      console.log(nextPosNum);
    }
  }

  overflow(pawn: Pawn, positions: Position[], prevPosNum: number, nextPosNum: number){
    if (nextPosNum >= 52 && positions[52].hasPawn == true && positions[51].hasPawn == false ){
      console.log("overflow 51");
      positions[51].hasPawn = true;
      positions[51].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
    } if (nextPosNum >= 52  && positions[51].hasPawn == true && positions[50].hasPawn == false){
      console.log("overflow 50");
      positions[50].hasPawn = true;
      positions[50].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
    }if (nextPosNum >= 52 && positions[52].hasPawn == true && positions[51].hasPawn == true && positions[50].hasPawn == true){
      console.log("overflow 49");
      positions[49].hasPawn = true;
      positions[49].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
    }/*if (nextPosNum >= 52 && positions[52].hasPawn == true && positions[51].hasPawn == true && positions[50].hasPawn == true && positions[49].hasPawn == true){
      console.log("overflow 48");
      positions[50].hasPawn = true;
      positions[50].pawn = pawn;
      pawn.clickable = false;
      pawn.saved = true;
    }*/
  }

  test(pawn: Pawn, positions: any[]){
  for(let b = 0;b<=positions.length;b++){
    let check = positions[this.pathR[b]].hasPawn;
    if(check== false){
      let value = this.pathR[b];
      console.log("TESTERTEST");
      this.array.push(positions[value]);
    }
  }


  }
  moveToPathRed(pawn: Pawn, position: Position[], prevPosNum: number, nextPosNum: number, diceNum: number, positionWin: Position[]) {

    console.log("QUE MOVE TO PATH 1");
    console.log("Dice thrown")
    console.log(diceNum);
    console.log(prevPosNum);
    console.log(nextPosNum);
    console.log("last object of redCheck")
    console.log(this.redCheck.slice(-1))
    console.log(position[54]);
    console.log(position[53]);
    console.log(position[52]);
    console.log(position[51]);
    console.log(position[50]);
    console.log(position[49])
    console.log(position[48]);
    console.log(position[47]);
    console.log(position[6]);



    console.log("Start for loop redCHECKER");
    for (let p = 0; p <= this.redCheck.length; p++) {
      if (prevPosNum == this.redCheck[p] || prevPosNum >=47) {

        console.log("Red CHECKER: ");
        console.log(prevPosNum);
        console.log(nextPosNum);
        console.log(this.redCheck[p]);
        for (let i = 0; i <= position.length; i++) {
          let destination: number;
          let value: number;
          let checkPrevValue = i;
          if (pawn.player.color === "RED" && (prevPosNum == checkPrevValue)) {
            for (let e = 0; e <= position.length; e++) {
              let checkNextValue = e;
              if (nextPosNum == checkNextValue) {
                value = prevPosNum;
                position[checkPrevValue].hasPawn = false;
                position[checkPrevValue].pawn = null;
                position[checkNextValue].hasPawn = false;
                position[checkNextValue].pawn = null;
                destination = (prevPosNum + diceNum);
                console.log(destination);
                console.log("END PATH 1");


                  }if((destination) > 52 && position[52].hasPawn == false){

                position[checkPrevValue].hasPawn = false;
                position[checkPrevValue].pawn = null;
                position[checkNextValue].hasPawn = false;
                position[checkNextValue].pawn = null;

                let result: number = (52- prevPosNum)
                console.log("QUE MOVE TO PATH 2");


                position[prevPosNum + result].hasPawn = true;
                position[prevPosNum + result].pawn = pawn;
                pawn.currentPositionIndex = prevPosNum + result;
                console.log("END PATH2");
                pawn.clickable = false;
                pawn.saved = true;

                console.log(" PATH 3 - click=false, saved");
                console.log("Value:");
                console.log(destination);
                console.log("PREV - 52");
                console.log(result);
                console.log(prevPosNum + result);
                console.log(position[prevPosNum + result]);
                console.log("Dice Value:");
                console.log(diceNum);
                // @ts-ignore
                console.log((value + diceNum));
                console.log("checkprev:");
                console.log(checkPrevValue);
                console.log("checknext:");
                console.log(checkNextValue);
                console.log("destination: ");
                console.log(destination);
                console.log("check / var check = (pawn.currentPositionIndex = destination); ");
                console.log("Check hasPawns: ");
                console.log(position[54]);
                console.log(position[53]);
                console.log(position[52]);
                console.log(position[51]);
                console.log(position[50]);
                console.log(position[49]);
                console.log(position[48]);
                console.log(position[47]);
                console.log(position[6]);
                console.log("END PATH 2")
              }
                }
              }
            }
          }
        }
      }
    }


