import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SignalrService } from './signalr.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  playerNames: Subject<string[]> = new Subject<string[]>();

  constructor(
    private _signalrService: SignalrService
  ) { 
    this._signalrService.connection.on('newUserJoined', (userNames: string[]) => {
      console.log(userNames);
      this.playerNames.next(userNames.slice());
    });
  }

}