import { createContext } from "react";
import type { Dispatch } from "react";
import type { State, Action } from "./types";
import { initialState } from "./AlertReducer";

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const AlertContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export default AlertContext;
