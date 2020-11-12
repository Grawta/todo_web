import React from "react";

export interface ITodoItem {
  id: number;
  title: string;
  desc?: string;
  isComplete?: boolean;
}

export interface ITodoList {
  todos: ITodoItem[];
}

export interface IContextModel {
  state: ITodoList;
  dispatch: React.Dispatch<ICounterAction>;
}

export type ICounterAction =
  | { type: "ADD"; payload: ITodoItem }
  | { type: "DELETE"; payload: number };
