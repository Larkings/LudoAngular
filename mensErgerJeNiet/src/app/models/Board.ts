import {Player} from "./Player";
import {Position} from "./Position";
import {Pawn} from "./Pawn";

export class Board {

  // length of the straight line from starting position up to but excluding the center of the board
  dimension: number;
  // track length of one player corner = dimension + 1 + dimension + 2    (excluding home positions)
  // total circular track length = 4 * track length of one player corner
  get trackLength() {
    return 4 * (2 * this.dimension + 2);
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
    freePawn.currentPosition = player.startPosition;
    return true;
  }

  constructor(dimension: number) {
    this.dimension = dimension;
    this.players = [];
    this.playerIndexWithTurn = 0;
    this.latestDiceResult = 0;
    this.positions = new Array<Position>(this.trackLength);
    this.setupPositions();
  }

  private startPositionOfPlayerIndex(playerIndex: number): number {
    // a player starts at the first position of the track in his corner
    return playerIndex * (2 * this.dimension + 2);
  }

  public addPlayer(player: Player) {
    player.startPosition = this.startPositionOfPlayerIndex(this.players.length);
    this.players.push(player);
  }

  private setupPositions() {
    // configure 8 straight track parts of size dimension
    for (let i = 0; i < this.dimension; i++) {
      // from red starting point to the right and then up
      this.positions[i] = new Position(1 + i, this.dimension + 1);
      this.positions[this.dimension + i] = new Position(this.dimension + 1, this.dimension + 1 - i);
      // from blue starting point downwards and then to the right
      this.positions[2 * this.dimension + 2 + i] = new Position(this.dimension + 3, 1 + i);
      this.positions[3 * this.dimension + 2 + i] = new Position(this.dimension + 3 + i, this.dimension + 1);
      // from green starting point to the left and then downwards
      this.positions[4 * this.dimension + 4 + i] = new Position(2 * this.dimension + 3 - i, this.dimension + 3);
      this.positions[5 * this.dimension + 4 + i] = new Position(this.dimension + 3, this.dimension + 3 + i);
      // from orange starting point upward and then to the left
      this.positions[6 * this.dimension + 6 + i] = new Position(this.dimension + 1, 2 * this.dimension + 3 - i);
      this.positions[7 * this.dimension + 6 + i] = new Position(this.dimension + 1 - i, this.dimension + 3);
    }
    // configure 4 track parts just before the home entrance
    for (let i = 0; i < 2; i++) {
      // before red player entrance
      this.positions[8 * this.dimension + 6 + i] = new Position(1, this.dimension + 3 - i)
      // before blue player entrance
      this.positions[2 * this.dimension + i] = new Position(this.dimension + 1 + i, 1);
      // before green player entrance
      this.positions[4 * this.dimension + 2 + i] = new Position(2 * this.dimension + 3, this.dimension + 1 + i);
      // before orange player entrance
      this.positions[6 * this.dimension + 4 + i] = new Position(this.dimension + 3 - i, 2 * this.dimension + 3);
    }
  }
}
