import styled from "@emotion/styled";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Edit, DeleteOutlined as Delete } from "@mui/icons-material";

type ButtonProps = {
  onClick: () => void;
};

export { default as FormModal } from "../FormModal/FormModal";

export const Container = styled.div``;

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
