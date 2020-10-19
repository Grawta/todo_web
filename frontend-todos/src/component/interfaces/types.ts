import React from "react";

export interface ITodoItem {
  id: number;
  title: string;
  desc: string;
  isComplete: boolean;
}

export interface ICounterState {
  todos: ITodoItem[];
}

export interface IContextModel {
  state: ICounterState;
  dispatch: React.Dispatch<ICounterAction>;
}

export type ICounterAction =
  | { type: "ADD"; payload: ITodoItem }
  | { type: "DELETE"; payload: number };
