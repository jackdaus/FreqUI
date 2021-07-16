import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WaitingRoomResolver } from './waiting-room/waiting-room-resolver.service';
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
    path: 'game-creator',
    component: GameCreatorComponent
  },
  {
    path: 'waiting-room/:roomId',
    component: WaitingRoomComponent,
    resolve: {
      game: WaitingRoomResolver
    }
  },
  {
    path: 'game-room',
    component: GameRoomComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
