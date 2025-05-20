import { useContext } from "react";
import {
  Container,
  Header,
  TextField,
  AddressField,
  Option,
  Age,
  FieldGroup,
} from "./Filters.styles";
import FiltersContext from "../../../StateManagement/Filters/FiltersContext";

const Filters = () => {
  const { state, dispatch } = useContext(FiltersContext);
  const {
    firstName,
    middleName,
    lastName,
    age,
    status,
    address,
    city,
    stateProvince,
    zipCode,
  } = state;

  return (
    <Container>
      <Header variant="h6">Filters</Header>
      <FieldGroup>
        <TextField
          label="First Name"
          value={firstName}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_FIRST_NAME",
              payload: e.target.value,
            })
          }
        />
        <TextField
          label="Middle Name"
          value={middleName}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_MIDDLE_NAME",
              payload: e.target.value,
            })
          }
        />
        <TextField
          label="Last Name"
          value={lastName}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_LAST_NAME",
              payload: e.target.value,
            })
          }
        />
        <Age
          value={age}
          valueLabelDisplay="on"
          min={0}
          max={120}
          onChange={(_: Event, value: number | number[]) => {
            dispatch({
              type: "UPDATE_AGE",
              payload: value as number[],
            });
          }}
          disableSwap
        />
        <TextField
          label="Status"
          value={status}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_STATUS",
              payload: e.target.value,
            })
          }
          select
        >
          {["Inquiry", "Onboarding", "Active", "Churned"].map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
        </TextField>
      </FieldGroup>
      <FieldGroup>
        <AddressField
          label="Address"
          value={address}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ADDRESS",
              payload: e.target.value,
            })
          }
        />
        <TextField
          label="City"
          value={city}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_CITY",
              payload: e.target.value,
            })
          }
        />
        <TextField
          label="State/Province"
          value={stateProvince}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_STATE_PROVINCE",
              payload: e.target.value,
            })
          }
        />
        <TextField
          label="Zip Code"
          value={zipCode}
          variant="outlined"
          size="small"
          onChange={(e) =>
            dispatch({
              type: "UPDATE_ZIP_CODE",
              payload: e.target.value,
            })
          }
        />
      </FieldGroup>
    </Container>
  );
};

export default Filters;
