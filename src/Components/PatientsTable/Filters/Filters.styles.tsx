import styled from "@emotion/styled";
import {
  TextField as _TextField,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";

type SliderProps = {
  value: number[];
  valueLabelDisplay: "on" | "auto" | "off" | undefined;
  min: number;
  max: number;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
  disableSwap: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
`;

export const Header = styled(Typography)``;

export const TextField = styled(_TextField)`
  width: 150px;
`;

export const AddressField = styled(TextField)`
  width: 250px;
`;

export const Option = styled(MenuItem)``;

const AgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  text-align: center;
  padding: 0 15px;
`;
const AgeLabel = styled(Typography)``;
const AgeSlider = styled(Slider)`
  padding: 3px 0;
`;

export const Age = styled((props: SliderProps) => {
  return (
    <AgeContainer>
      <AgeLabel>Age</AgeLabel>
      <AgeSlider {...props} />
    </AgeContainer>
  );
})``;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  text-align: left;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
