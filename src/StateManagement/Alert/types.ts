type State = {
  error: string;
};

type Action = {
  type: "UPDATE_ERROR";
  payload: string;
};

export type { State, Action };
