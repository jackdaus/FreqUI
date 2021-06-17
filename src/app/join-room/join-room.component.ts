import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { RoomService } from '../shared/room.service';

@Component({
	selector: 'app-join-room',
	templateUrl: './join-room.component.html',
	styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit {
	joinGameForm = new FormGroup({
		name: new FormControl('', Validators.required),
		roomCode: new FormControl('', Validators.required),
	});
	
	constructor(
		private _roomService: RoomService,
	) { } 

	ngOnInit(): void {
	}
	
	async onSubmit() {
		const name = this.joinGameForm.get("name")?.value;
		const roomCode = this.joinGameForm.get("roomCode")?.value;
		this._roomService.joinRoom(roomCode, name);
	}


}
