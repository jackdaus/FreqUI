import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GameService } from '../shared/game.service';
import { Axis, Game, Phase } from '../shared/model.model';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit, OnDestroy {

  game: Game;
  game$: Subscription;
  Phase = Phase; // Necessary in order to use in template

  axisForm = new FormGroup({
    leftWordControl: new FormControl('', Validators.required),
    rightWordControl: new FormControl('', Validators.required),
  });

  clueGivingAxis: Axis;
  clueGivingAxis$: Subscription;
  clueControl: FormControl = new FormControl('', Validators.required);

  constructor(
    private _gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.game$ = this._gameService.game.subscribe(game => {
      this.game = game;
    });

    this.clueGivingAxis$ = this._gameService.clueGivingAxis.subscribe(axis => {
      this.clueGivingAxis = axis;
    });
  }

  ngOnDestroy(): void {
    this.game$?.unsubscribe();
    this.clueGivingAxis$?.unsubscribe();
  }

  submitAxisIdea() {
    let leftWord = this.axisForm.get('leftWordControl')?.value;
    let rightWord = this.axisForm.get('rightWordControl')?.value;
    this._gameService.postAxisIdea(this.game.id, leftWord, rightWord);
  }

  submitClue() {
    console.log(this.clueControl.value)
  }

}
