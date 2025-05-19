import { useState, useEffect } from "react";
import { apiUrl } from "../../Utils/config";
import type { Patient } from "../../Utils/types";
import type { GridColDef } from "@mui/x-data-grid";
import {
  Container,
  Table,
  EditButton,
  DeleteButton,
  FormModal,
} from "./PatientsTable.styles";

const PatientsTable = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Patient | undefined>(
    undefined
  );

  const fetchPatients = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${apiUrl}/patients`);
      const patients = await response.json();

      if (response.status !== 200) {
        throw new Error("There was an error retrieving patients");
      }

      console.log("patients", patients);
      setPatients(patients);
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "first_name",
      headerName: "First",
      width: 90,
    },
    { field: "middle_name", headerName: "Middle", width: 90, editable: true },
    {
      field: "last_name",
      headerName: "Last",
      width: 90,
    },
    {
      field: "date_of_birth",
      headerName: "DOB",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      valueOptions: ["Inquiry", "Onboarding", "Active", "Churned"],
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "state_province",
      headerName: "State/Province",
      width: 120,
    },
    {
      field: "zip_code",
      headerName: "Zip Code",
      width: 120,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }) => {
        const editedPatient = patients.find((patient) => patient.id === id);
        return [
          <EditButton
            onClick={() => {
              setEditedPatient(editedPatient);
              setIsModalOpen(true);
            }}
          />,
          <DeleteButton
            onClick={() => {
              console.log("deleting");
            }}
          />,
        ];
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Container>
      <button onClick={() => setIsModalOpen(true)}>Add Patient</button>
      <Table
        rows={patients}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 25, 50]}
        disableColumnFilter
        editMode="row"
      />
      <FormModal
        initialValues={editedPatient}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={fetchPatients}
      />
    </Container>
  );
};

export default PatientsTable;
