import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Edit, DeleteOutlined as Delete } from "@mui/icons-material";

type ButtonProps = {
  onClick: () => void;
};

export { default as FormModal } from "./FormModal/FormModal";
export { default as Filters } from "./Filters/Filters";

export const Container = styled.div``;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 631px;
  background: #fff;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AddButton = styled(Button)`
  height: 40px;
  background-color: #79c4b7;
  color: #fff;
  align-self: end;

  &:hover {
    background-color: #429587;
  }
`;

export const Table = styled(DataGrid)``;

export const EditButton = (props: ButtonProps) => (
  <GridActionsCellItem icon={<Edit />} label="Edit" onClick={props.onClick} />
);

export const DeleteButton = (props: ButtonProps) => (
  <GridActionsCellItem
    icon={<Delete />}
    label="Delete"
    onClick={props.onClick}
  />
);
