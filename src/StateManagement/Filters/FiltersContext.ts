import { createContext } from "react";
import type { Dispatch } from "react";
import type { State, Action } from "./types";
import { initialState } from "./FiltersReducer";

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const FiltersContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export default FiltersContext;
