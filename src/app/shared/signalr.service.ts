import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  connection: signalR.HubConnection;

  constructor() { 
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:5001/gamehub")
    .build();

    this.connection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err));
  }

}
