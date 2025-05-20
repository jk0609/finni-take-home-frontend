import type { State, Action } from "./types";

const initialState = {
  error: "",
};

const alertReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, alertReducer };
