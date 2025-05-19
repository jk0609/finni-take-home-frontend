import "./App.css";
import { apiUrl } from "./Utils/config";
import PatientsTable from "./Components/PatientsTable/PatientsTable";

function App() {
  // PUT test
  const handleEditPatient = async () => {
    try {
      const response = await fetch(`${apiUrl}/patients/502`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: "Edited",
          last_name: "Patient",
        }),
      });

      if (response.status !== 200) {
        throw new Error("There was an error adding this patient");
      }
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    }
  };

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
      <button onClick={handleEditPatient}>Edit Patient</button>
      <button onClick={handleDeletePatient}>Delete Patient</button>
      <PatientsTable />
    </div>
  );
}

export default App;
