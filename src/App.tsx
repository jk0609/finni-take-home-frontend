import { useReducer } from "react";
import FiltersContext from "./StateManagement/Filters/FiltersContext";
import {
  filtersReducer,
  initialState as filtersInitialState,
} from "./StateManagement/Filters/FiltersReducer";
import {
  alertReducer,
  initialState as alertInitialState,
} from "./StateManagement/Alert/AlertReducer";
import "./App.css";
import PatientsTable from "./Components/PatientsTable/PatientsTable";
import Alert from "./Components/Alert/Alert";
import AlertContext from "./StateManagement/Alert/AlertContext";

function App() {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersInitialState
  );
  const filtersValue = { state: filtersState, dispatch: filtersDispatch };

  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    alertInitialState
  );
  const alertValue = { state: alertState, dispatch: alertDispatch };

  return (
    <AlertContext value={alertValue}>
      <FiltersContext value={filtersValue}>
        <PatientsTable />
        <Alert />
      </FiltersContext>
    </AlertContext>
  );
}

export default App;
