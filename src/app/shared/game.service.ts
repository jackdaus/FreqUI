import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './model.model';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private _http: HttpClient,
  ) { }

  createNewGame(): Observable<Game> {
    //TODO use config to get api root
    return this._http.post<Game>('https://localhost:5001/api/games/new', null);
  }

  getGame(id: string): Observable<Game> {
    return this._http.get<Game>(`https://localhost:5001/api/games/${id}`);
  }

}
