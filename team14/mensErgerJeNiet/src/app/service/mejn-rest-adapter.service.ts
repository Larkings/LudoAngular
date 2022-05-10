import {Injectable} from '@angular/core';
import {Board} from "../models/Board";
import {HttpClient} from "@angular/common/http";
import {Pawn} from "../models/Pawn";
import {Position} from "../models/Position";
import {Player} from "../models/Player";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class MejnRestAdapterService {

private resourceUrl = environment.BACKEND_URL;

  constructor(private http: HttpClient) {
    // this.resourceUrl = environment.BACKEND_URL + "/game-start"
  }
  board: Board[] = [];
  public gameSubject = new BehaviorSubject<Board[]>(this.board);
  public readonly board$ = this.gameSubject.asObservable()
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

  async asyncGetPosition(): Promise<Observable<Position>> {
    return this.http.get<Position>(`${this.resourceUrl}/positions`);
  }

  async asyncRemovePosition(): Promise<Observable<Position>> {
    return this.http.delete<Position>(`${this.resourceUrl}/positions`);;
  }


}
