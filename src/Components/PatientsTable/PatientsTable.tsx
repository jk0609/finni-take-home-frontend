import { useState, useContext } from "react";
import type { Patient } from "../../Utils/types";
import type { GridColDef } from "@mui/x-data-grid";
import AlertContext from "../../StateManagement/Alert/AlertContext";
import {
  Container,
  TableContainer,
  Table,
  Controls,
  AddButton,
  EditButton,
  DeleteButton,
  FormModal,
  Filters,
} from "./PatientsTable.styles";
import { deletePatients } from "../../Utils/api";
import usePatients from "../../Hooks/usePatients";

const PatientsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Patient | undefined>(
    undefined
  );
  const {
    filteredPatients: patients,
    isLoading,
    fetchPatients,
  } = usePatients();

  const { dispatch: alertDispatch } = useContext(AlertContext);

  const deletePatient = async (id: string) => {
    try {
      await deletePatients(id);
      fetchPatients();
    } catch (err) {
      const error = err as Error;
      alertDispatch({
        type: "UPDATE_ERROR",
        payload: error.message,
      });
    }
  };

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
      field: "age",
      headerName: "Age",
      width: 60,
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
              deletePatient(id as string);
            }}
          />,
        ];
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Container>
      <Controls>
        <Filters />
        <AddButton
          onClick={() => {
            setEditedPatient(undefined);
            setIsModalOpen(true);
          }}
        >
          Add Patient
        </AddButton>
      </Controls>
      <TableContainer>
        <Table
          rows={patients}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 25, 50]}
          disableColumnFilter
          editMode="row"
          loading={isLoading}
        />
      </TableContainer>
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
