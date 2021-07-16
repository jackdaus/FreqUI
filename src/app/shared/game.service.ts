import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Axis, Game } from './model.model';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game: ReplaySubject<Game> = new ReplaySubject<Game>();
  clueGivingAxis: Subject<Axis> = new Subject<Axis>();

  constructor(
    private _http: HttpClient,
    private _signalrService: SignalrService,
    private _router: Router,
  ) { 
    this._signalrService.connection.on("gameStarted", (game: Game) => {
      this.game.next(game);
      this._router.navigate(['game-room']);
    });

    this._signalrService.connection.on("phaseChange", (game: Game) => {
      this.game.next(game);
    });

    this._signalrService.connection.on("cluePhase", (axis: Axis) => {
      console.log(axis)
      this.clueGivingAxis.next(axis);
    });
  }

  createNewGame(): Observable<Game> {
    return this._http.post<Game>('https://localhost:5001/api/games/new', null);
  }

  getGame(gameId: string): Observable<Game> {
    return this._http.get<Game>(`https://localhost:5001/api/games/${gameId}`);
  }

  startGame(gameId: string) {
    this._signalrService.connection.send("startGame", gameId);
  }

  postAxisIdea(gameId: string, leftWord: string, rightWord: string) {
    this._signalrService.connection.send("submitAxisIdea", gameId, leftWord, rightWord);
  }

}
