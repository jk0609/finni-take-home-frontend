import { useReducer } from "react";
import FiltersContext from "./StateManagement/Filters/FiltersContext";
import {
  filtersReducer,
  initialState as filtersInitialState,
} from "./StateManagement/Filters/FiltersReducer";
import "./App.css";
import PatientsTable from "./Components/PatientsTable/PatientsTable";

function App() {
  const [filtersState, filtersDispatch] = useReducer(
    filtersReducer,
    filtersInitialState
  );
  const filtersValue = { state: filtersState, dispatch: filtersDispatch };

  return (
    <FiltersContext value={filtersValue}>
      <PatientsTable />
    </FiltersContext>
  );
}

export default App;
