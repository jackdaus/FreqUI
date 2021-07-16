import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { GameService } from '../shared/game.service';
import { Game, Player } from '../shared/model.model';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit, OnDestroy {

  players: Player[] = []
  game: Game;
  loggedPlayer: Player;

  loggedPlayer$: Subscription;
  players$: Subscription;

  constructor(
    private _roomService: RoomService,
    private _route: ActivatedRoute,
    private _gameService: GameService,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe((data: Data) => {
      this.game = data.game;
    });

    this.loggedPlayer$ = this._roomService.loggedPlayer.subscribe(player => {
      this.loggedPlayer = player;
    });

    this.players$ = this._roomService.players.subscribe(players => {
      this.players = players;
    });
  }

  ngOnDestroy(): void {
    this.loggedPlayer$?.unsubscribe();
    this.players$?.unsubscribe();
  }

  onUsernameChange(newUsername: any) {
    this._roomService.changeName(newUsername);
  }

  trackByFn(index: number, player: Player) {
    return player.id;
  }

  onStart() {
    this._gameService.startGame(this.game.id);
  }

}
