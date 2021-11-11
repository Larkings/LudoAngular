import {Player} from "./Player";
import { Position } from "./Position";



export class Board {

  // length of the straight line from starting position up to but excluding the center of the board (default=7)
  trackLength: number;
  // number of positions before the starting position in front of the home area (default=2)
  trackWidth: number;
  // track length of one player corner = dimension + 1 + dimension + 2    (excluding home positions)
  // total circular track length = 4 * track length of one player corner
  get totalTrackLength() {
    return 4 * (2 * this.trackLength + this.trackWidth);
  }

  players: Player[];
  public playerIndexWithTurn: number;   // the index of the player in the players array who has the turn
  public positions: Position[];

  public latestDiceResult: number;

  get playerWithTurn() {
    return this.players[this.playerIndexWithTurn];
  }

  public nextTurn() {
    if (this.players.length == 0) return;
    this.playerIndexWithTurn = (this.playerIndexWithTurn+1) % this.players.length;
    this.latestDiceResult = 0;
  }

  public placeAFreePawnAtStartPosition(player: Player): boolean {
    let freePawn = player.getFreePawn();
    if (freePawn == null) return false;
    freePawn.currentPositionIndex = player.startPosition;
    return true;
  }

  constructor(trackLength: number, trackWidth: number) {
    this.trackLength = trackLength;
    this.trackWidth = trackWidth;
    this.players = [];
    this.playerIndexWithTurn = 0;
    this.latestDiceResult = 0;
  }

  private startPositionOfPlayerIndex(playerIndex: number): number {
    // a player starts at the first position of the track in his corner
    return playerIndex * (2 * this.trackLength + this.trackWidth);
  }

  public addPlayer(player: Player) {
    player.startPosition = this.startPositionOfPlayerIndex(this.players.length);
    this.players.push(player);
  }
}
