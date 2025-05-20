import type { State, Action } from "./types";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  age: [0, 120],
  status: "",
  address: "",
  city: "",
  stateProvince: "",
  zipCode: "",
};

const filtersReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "UPDATE_MIDDLE_NAME":
      return {
        ...state,
        middleName: action.payload,
      };
    case "UPDATE_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "UPDATE_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "UPDATE_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "UPDATE_STATE_PROVINCE":
      return {
        ...state,
        stateProvince: action.payload,
      };
    case "UPDATE_ZIP_CODE":
      return {
        ...state,
        zipCode: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, filtersReducer };
