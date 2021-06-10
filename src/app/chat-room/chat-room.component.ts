import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { SignalrService } from '../shared/signalr.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  username = new Date().getTime();
  newMsg: string = '';
  // connection: signalR.HubConnection;
  messages: string[] = [];

  constructor(
    private _signalrService: SignalrService
  ) { }

  ngOnInit(): void {
    this._signalrService.connection.on("messageReceived", (username: string, message: string) => {
      this.messages.push(message);
    });
  }

  onSendMsg() {
    this._signalrService.connection.send("newMessage", this.username, this.newMsg)
      .then(() => this.newMsg = "");
    console.log(this.newMsg);
  }

}
