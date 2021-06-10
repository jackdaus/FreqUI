import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { RoomManagerComponent } from './room-manager/room-manager.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';

const routes: Routes = [
  {
    path: 'chat-room',
    component: ChatRoomComponent
  },
  {
    path: 'join-room',
    component: JoinRoomComponent
  },
  {
    path: 'room-manager',
    component: RoomManagerComponent
  },
  {
    path: 'waiting-room/:roomId',
    component: WaitingRoomComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
