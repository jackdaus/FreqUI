export interface Game {
  id: string;
  roomCode: string;
  phase: Phase,
  creationDate: Date,
  players: Player[]
}

export enum Phase {
  Registration,
  AxisIdeation,
  ClueGiving,
  Guessing,
  RoundResults,
  GameResults,
  Completed
}

export interface Player {
  id: string,
  connectionId: string,
  username: string,
  isOwner: boolean,
  position: number,
  points: number,
}

export interface Axis {
  id: string;
  gameId: string;
  axisAuthorId: string;
  leftWord: string;
  rightWord: string;
  targetNumber: number;
  clue: string;
  clueAuthorId: string;
}