import { ICounterState, ICounterAction } from "../component/interfaces/types";

export const defaultState: ICounterState = {
  todos: [],
};

export function Reducer(
  state: ICounterState,
  action: ICounterAction
): ICounterState {
  switch (action.type) {
    default:
      return state;
  }
}
