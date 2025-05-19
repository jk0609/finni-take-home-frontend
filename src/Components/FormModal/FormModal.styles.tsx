import styled from "@emotion/styled";
import {
  Button,
  Card,
  TextField as _TextField,
  MenuItem,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import Modal from "@mui/material/Modal";
import type { PickerValue } from "@mui/x-date-pickers/internals";

type DatePickerProps = {
  label: string;
  value: Dayjs;
  onChange: (newDate: PickerValue) => void;
};

export const Container = styled(Modal)``;

export const Content = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 400px;
  min-width: 500px;
  background-color: #f4f0ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 15px;
`;

export const Header = styled(Typography)``;

export const Form = styled.form``;

export const FieldSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 20px;
`;

export const TextField = styled(_TextField)`
  min-width: 200px;
`;
export const Option = styled(MenuItem)``;

export const DateOfBirthField = styled((props: DatePickerProps) => {
  const { label, value, onChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newDate) => onChange(newDate)}
      />
    </LocalizationProvider>
  );
})``;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Submit = styled(Button)`
  height: 40px;
  background-color: #79c4b7;
  color: #fff;

  &:hover {
    background-color: #429587;
  }
`;

export const Cancel = styled(Button)`
  height: 40px;
  color: #000;
  background-color: #d3d3d3;

  &:hover {
    background-color: transparent;
  }
`;
