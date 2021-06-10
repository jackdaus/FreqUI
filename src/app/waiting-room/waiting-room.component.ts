import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  players: string[] = [];

  constructor(
    private _roomService: RoomService,
  ) { }

  ngOnInit(): void {
    this._roomService.playerNames.subscribe(names => {
      console.log('from waiting room: ' + names);
      this.players = names;
    });

  }

}
