import { IconColor } from "./icon-color";
import { PlayState } from "./play-state";

export class Base {
  BasePointers: BasePointer[];
  IconColor: IconColor;
  Path: string[];
  WinnerNumber: number;
  AutoPlay: boolean;
  IsPlayer: boolean;
  PlayState: PlayState
}

export class BasePointer{
  Index: number;
  Position: string;
  DefaultPosition: string;
  // State: PointerState;
  TotalSiblings: number;
  InnerIndex: number;
}
