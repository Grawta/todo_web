import { IContextModel } from "../component/interfaces/types";
import React, { useReducer } from "react";
import { defaultState, Reducer } from "./Reducer";

export const Context = React.createContext({} as IContextModel);

export const GlobalProvider: React.FC = () => {
  const [state, dispatch] = useReducer(Reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
