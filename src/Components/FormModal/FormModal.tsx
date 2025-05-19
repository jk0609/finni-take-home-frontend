import { useState, type FormEvent } from "react";
import { apiUrl } from "../../Utils/config";
import dayjs, { Dayjs } from "dayjs";
import {
  Container,
  Header,
  Content,
  Buttons,
  Submit,
  Cancel,
  Form,
  FieldSection,
  TextField,
  Option,
  DateOfBirthField,
} from "./FormModal.styles";

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const FormModal = (props: Props) => {
  const { isModalOpen, onClose, onSubmit } = props;

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState("Inquiry");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleClose = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDateOfBirth(null);
    setStatus("Inquiry");
    setAddress("");
    setCity("");
    setStateProvince("");
    setZipCode("");
    onClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          status: status,
          address: address,
          city: city,
          state_province: stateProvince,
          zip_code: zipCode,
        }),
      });

      if (response.status !== 200) {
        throw new Error("There was an error adding this patient");
      }

      onSubmit();
      handleClose();
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    }
  };

  return (
    <Container open={isModalOpen} onClose={handleClose}>
      <Content>
        <Header variant="h3">Add Patient</Header>
        <Form onSubmit={handleSubmit}>
          <FieldSection>
            <TextField
              label="First Name"
              value={firstName}
              variant="outlined"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <TextField
              label="Middle Name"
              value={middleName}
              variant="outlined"
              onChange={(e) => setMiddleName(e.target.value)}
              required
            />
            <TextField
              label="Last Name"
              value={lastName}
              variant="outlined"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FieldSection>
          <FieldSection>
            <DateOfBirthField
              label="Date of Birth"
              value={dateOfBirth || dayjs()}
              onChange={(newDate) => setDateOfBirth(newDate)}
            />
            <TextField
              label="Status"
              value={status}
              variant="outlined"
              onChange={(e) => setStatus(e.target.value)}
              required
              select
            >
              {["Inquiry", "Onboarding", "Active", "Churned"].map((status) => (
                <Option key={status} value={status}>
                  {status}
                </Option>
              ))}
            </TextField>
          </FieldSection>
          <FieldSection>
            <TextField
              label="Address"
              value={address}
              variant="outlined"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <TextField
              label="City"
              value={city}
              variant="outlined"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </FieldSection>
          <FieldSection>
            <TextField
              label="State/Province"
              value={stateProvince}
              variant="outlined"
              onChange={(e) => setStateProvince(e.target.value)}
              required
            />
            <TextField
              label="Zip Code"
              value={zipCode}
              variant="outlined"
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </FieldSection>

          <Buttons>
            <Cancel onClick={handleClose}>Cancel</Cancel>
            <Submit type="submit">Add Patient</Submit>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};

export default FormModal;
