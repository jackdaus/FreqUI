import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Player } from './model.model';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  loggedPlayer: ReplaySubject<Player> = new ReplaySubject<Player>();
  players: ReplaySubject<Player[]> = new ReplaySubject<Player[]>();

  constructor(
    private _signalrService: SignalrService,
    private _router: Router,
  ) {
    // Register signalR callbacks
    this._signalrService.connection.on("joinSuccess", (roomId: string, player: Player) => {
      this.loggedPlayer.next(player);
      this._router.navigate(['waiting-room', roomId]);
    });

    this._signalrService.connection.on("playerDataChange", (players: Player[]) => {
      this.players.next(players);
    });
  }

  joinRoom(roomCode: string, username: string) {
    this._signalrService.connection.send("joinRoom", roomCode, username);
  }

  changeName(newUsername: string) {
    this._signalrService.connection.send("changeName", newUsername);
  }

}