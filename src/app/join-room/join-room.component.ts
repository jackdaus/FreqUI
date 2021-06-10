import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignalrService } from '../shared/signalr.service';

@Component({
	selector: 'app-join-room',
	templateUrl: './join-room.component.html',
	styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
	joinGameForm = new FormGroup({
		name: new FormControl('', Validators.required),
		roomCode: new FormControl('', Validators.required),
	});
	
	constructor(
		private _signalrService: SignalrService,
		private _router: Router,
	) { } 

	ngOnInit(): void {
		this._signalrService.connection.on("errorRoomNotFound", (roomCode: string) => {
			console.log("Error, room code not found!");
		});

		this._signalrService.connection.on("joinSuccess", (roomCode: string) => {
			console.log('join successful!');
			this._router.navigate(['waiting-room', roomCode]);
		});
	}
	
	async onSubmit() {
		const name = this.joinGameForm.get("name")?.value;
		const roomCode = this.joinGameForm.get("roomCode")?.value;
		this._signalrService.connection.send("joinGame", roomCode, name);
	}


}
