import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from '../shared/game.service';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-game-creator',
  templateUrl: './game-creator.component.html',
  styleUrls: ['./game-creator.component.scss']
})
export class GameCreatorComponent implements OnInit {

  gameType: string = '';

  constructor(
    private _gameSerive: GameService,
    private _roomService: RoomService,
  ) { }

  ngOnInit(): void {
  }


  onCreateRoom() {
    this._gameSerive.createNewGame().toPromise().then(newGame => {
      // Right now, gameType doesn't do anything... TODO
      console.log(newGame)
      this._roomService.joinRoom(newGame.roomCode, 'host');
    });
  }
}
