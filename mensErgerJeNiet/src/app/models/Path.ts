import {Pawn} from "./Pawn";
import {Position} from "./Position";

export class Path {


  overflow(pawn: Pawn, position: Position[], prevPosNum: number, nextPosNum: number, dice: number){
    let breakpoint = 47;
    console.log("Overflow");
    console.log(prevPosNum);
    console.log(nextPosNum);
    if ((!(pawn.player.color === "RED")) && nextPosNum>breakpoint){
      let overflow = ((prevPosNum + dice) - breakpoint - 1);
      position[prevPosNum].hasPawn = false;
      position[prevPosNum].pawn = null;
      position[nextPosNum].hasPawn = false;
      position[nextPosNum].pawn = null;
      position[overflow].hasPawn = true;
      position[overflow].pawn = pawn;
      pawn.currentPositionIndex = overflow;
    }}

lockPawn(pawn: Pawn, position: Position[], prevPosNum: number, nextPosNum: number, dice: number){
  if ((pawn.player.color == "BLUE" && prevPosNum <= 11 && nextPosNum > 11) ||
    (pawn.player.color == "BLUE" && prevPosNum <= 11 && nextPosNum > 11 && position[11].hasPawn)) {
    let overflow = 11 - prevPosNum;
    position[prevPosNum].hasPawn = false;
    position[prevPosNum].pawn = null;
    position[nextPosNum].hasPawn = false;
    position[nextPosNum].pawn = null;
    let result = dice - overflow;
    let destination = 52 + result;
    if (destination > 57) {
      position[57].hasPawn = true;
      position[57].pawn = pawn;
      pawn.currentPositionIndex = 57;
    } else {
      position[destination].hasPawn = true;
      position[destination].pawn = pawn;
      pawn.currentPositionIndex = destination;
    }} if ((pawn.player.color == "GREEN" && prevPosNum <= 23 && nextPosNum > 23) ||
    (pawn.player.color == "GREEN" && prevPosNum <= 23 && nextPosNum > 23 && position[23].hasPawn)) {
    let overflow = 23 - prevPosNum;
    position[prevPosNum].hasPawn = false;
    position[prevPosNum].pawn = null;
    position[nextPosNum].hasPawn = false;
    position[nextPosNum].pawn = null;
    let result = dice - overflow;
    let destination = 57 + result;
    if (destination > 62) {
      position[62].hasPawn = true;
      position[62].pawn = pawn;
      pawn.currentPositionIndex = 62;
    } else {
      position[destination].hasPawn = true;
      position[destination].pawn = pawn;
      pawn.currentPositionIndex = destination;
    }} if ((pawn.player.color == "YELLOW" && prevPosNum <= 35 && nextPosNum > 35) ||
    (pawn.player.color == "YELLOW" && prevPosNum <= 35 && nextPosNum > 35 && position[35].hasPawn)) {
    let overflow = 35 - prevPosNum;
    position[prevPosNum].hasPawn = false;
    position[prevPosNum].pawn = null;
    position[nextPosNum].hasPawn = false;
    position[nextPosNum].pawn = null;
    let result = dice - overflow;
    let destination = 62 + result;
    if (destination > 67) {
      position[67].hasPawn = true;
      position[67].pawn = pawn;
      pawn.currentPositionIndex = 67;
    } else {
      position[destination].hasPawn = true;
      position[destination].pawn = pawn;
      pawn.currentPositionIndex = destination;
    }}
}


  deletePawnRBGY(pawn: Pawn, position: Position[], prevPosNum: number, nextPosNum: number) {
    if (
      (pawn.player.color === "BLUE" && nextPosNum > 57) ||
      (pawn.player.color === "GREEN" && nextPosNum > 62) ||
      (pawn.player.color === "YELLOW" && nextPosNum > 67) ||
      (pawn.player.color === "RED" && nextPosNum > 47)
    ) {
      position[prevPosNum].hasPawn = false;
      position[prevPosNum].pawn = null;
      position[nextPosNum].hasPawn = false;
      position[nextPosNum].pawn = null;
      console.log("DELETE RBGY");
      pawn.clickable = false;
      pawn.saved = true;
      for (let i = 0; i < pawn.player.thePawns.length; i++) {
        if (pawn.player.thePawns[i] === pawn) {
          pawn.player.thePawns.splice(i, 1);
          i--;
          console.log("Pawn deleted");
          console.log(pawn.player.color);
          console.log(pawn.player.thePawns);
        }}}}
}
