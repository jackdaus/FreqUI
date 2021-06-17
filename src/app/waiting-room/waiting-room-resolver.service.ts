import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/model.model';

@Injectable({
  providedIn: 'root'
})
export class WaitingRoomResolver implements Resolve<Game> {

  constructor(
    private _gameService: GameService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
    const gameId = route.paramMap.get('roomId');
    if (gameId != null) {
      return this._gameService.getGame(gameId);
    } else {
      throw new Error("No id found in route paramMap");
    }
  }
}
