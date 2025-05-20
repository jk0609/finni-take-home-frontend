type State = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number[];
  status: string;
  address: string;
  city: string;
  stateProvince: string;
  zipCode: string;
};

type Action =
  | { type: "UPDATE_FIRST_NAME"; payload: string }
  | { type: "UPDATE_MIDDLE_NAME"; payload: string }
  | { type: "UPDATE_LAST_NAME"; payload: string }
  | { type: "UPDATE_AGE"; payload: number[] }
  | { type: "UPDATE_STATUS"; payload: string }
  | { type: "UPDATE_ADDRESS"; payload: string }
  | { type: "UPDATE_CITY"; payload: string }
  | { type: "UPDATE_STATE_PROVINCE"; payload: string }
  | { type: "UPDATE_ZIP_CODE"; payload: string };

export type { State, Action };
