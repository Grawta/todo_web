import { ITodoList, ICounterAction } from "../component/interfaces/types";

export const defaultState: ITodoList = {
  todos: [],
};

export function Reducer(state: ITodoList, action: ICounterAction): ITodoList {
  switch (action.type) {
    default:
      return state;
  }
}
