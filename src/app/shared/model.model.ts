export interface Game {
  id: string;
  roomCode: string;
  phase: Phase,
  creationDate: Date,
  players: Player[]
}

export enum Phase {
  Registration,
  Ideation,
  ClueGiving,
  Guessing,
  RoundResults,
  GameResults,
  Completed
}

export interface Player {
  Id: string,
  ConnectionId: string,
  Username: string,
  Points: number,
}