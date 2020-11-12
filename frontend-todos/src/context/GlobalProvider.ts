import * as types from "../component/interfaces/types";
import React, { useReducer } from "react";
import { defaultState, Reducer } from "./Reducer";

export const Context = React.createContext({} as types.IContextModel);
