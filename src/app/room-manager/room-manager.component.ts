import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-room-manager',
	templateUrl: './room-manager.component.html',
	styleUrls: ['./room-manager.component.css']
})
export class RoomManagerComponent implements OnInit {
	rooms: any[] = [];

	constructor() { 
	}

	ngOnInit(): void {

	}

	async createRoom(): Promise<void> {
		// TODO
	}
}
