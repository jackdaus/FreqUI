import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, Route } from '@angular/router';
import { Game } from '../shared/model.model';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  players: string[] = [];
  game: Game;

  constructor(
    private _roomService: RoomService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe((data: Data) => {
      console.log(data.game);
      console.log('in wiaiting room data promise')

    });

    this._roomService.playerNames.subscribe(names => {
      console.log('from waiting room: ' + names);
      this.players = names;
    });

  }

}
