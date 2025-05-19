import "./App.css";
import { apiUrl } from "./Utils/config";
import PatientsTable from "./Components/PatientsTable/PatientsTable";

function App() {
  // DELETE test
  const handleDeletePatient = async () => {
    try {
      const response = await fetch(`${apiUrl}/patients/502`, {
        method: "DELETE",
      });

      if (response.status !== 200) {
        throw new Error("There was an error adding this patient");
      }
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleDeletePatient}>Delete Patient</button>
      <PatientsTable />
    </div>
  );
}

export default App;
