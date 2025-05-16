import "./App.css";
import { useEffect } from "react";
import { apiUrl } from "./Utils/config";
import PatientsTable from "./Components/PatientsTable/PatientsTable";

function App() {
  // GET test
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${apiUrl}/patients`);
        const patients = await response.json();

        if (response.status !== 200) {
          throw new Error("There was an error retrieving patients");
        }

        console.log(patients);
      } catch (err) {
        // @JonK: handle error
        console.error(err);
      }
    };
    fetchPatients();
  }, []);

  // POST test
  const handleAddPatient = async () => {
    try {
      const response = await fetch(`${apiUrl}/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: "Test",
          middle_name: "Tester",
          last_name: "Testest",
          date_of_birth: "1990-06-09",
          status: "Onboarding",
          address_one: "123 Test St",
          address_two: "Apt 1",
          city: "Test City",
          state_province: "Test State",
          zip_code: "11111",
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
      <button onClick={handleAddPatient}>Add Patient</button>
      <button onClick={handleEditPatient}>Edit Patient</button>
      <button onClick={handleDeletePatient}>Delete Patient</button>
      <PatientsTable />
    </div>
  );
}

export default App;
