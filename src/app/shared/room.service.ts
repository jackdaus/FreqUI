import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  playerNames: Subject<string[]> = new Subject<string[]>();

  constructor(
    private _signalrService: SignalrService,
    private _router: Router,
  ) {
    // Register signalR callbacks
    this._signalrService.connection.on('newUserJoined', (userNames: string[]) => {
      console.log(userNames);
      this.playerNames.next(userNames.slice());
    });

    this._signalrService.connection.on("joinSuccess", (roomId: string) => {
			console.log('join successful!');
			this._router.navigate(['waiting-room', roomId]);
		});
  }

  joinRoom(roomCode: string, username: string) {
		this._signalrService.connection.send("joinRoom", roomCode, username);
  }

}