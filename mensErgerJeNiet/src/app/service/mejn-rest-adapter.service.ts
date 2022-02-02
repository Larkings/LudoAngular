import {Injectable} from '@angular/core';
import {Board} from "../models/Board";
import {HttpClient} from "@angular/common/http";
import {Pawn} from "../models/Pawn";
import {Position} from "../models/Position";
import {Player} from "../models/Player";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class MejnRestAdapterService {

  constructor(private http: HttpClient) {
    // this.resourceUrl = environment.BACKEND_URL + "/game-start"
  }

  response: Observable<Board>;


  async asyncGetBoard(): Promise<Board> {
    return null;
  }

  async asyncAddPlayer(): Promise<Player> {
    return null;
  }

  async asyncOnPawnClick(): Promise<Pawn> {
    return null;
  }

  async asyncGetPosition(): Promise<Position> {
    return null;
  }

  async asyncRemovePosition(): Promise<Position> {
    return null;
  }


}
