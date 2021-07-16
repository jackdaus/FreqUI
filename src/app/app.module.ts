import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';

import { ChatRoomComponent } from './chat-room/chat-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WaitingRoomComponent } from './waiting-room/waiting-room.component';
import { GameCreatorComponent } from './game-creator/game-creator.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { FrequencyControllerComponent } from './frequency-controller/frequency-controller.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    JoinRoomComponent,
    WaitingRoomComponent,
    GameCreatorComponent,
    GameRoomComponent,
    FrequencyControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTooltipModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
