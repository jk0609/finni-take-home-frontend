import { useState, useEffect, type FormEvent } from "react";
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
import type { Patient } from "../../../Utils/types";
import { postPatients, putPatients } from "../../../Utils/api";

type Props = {
  initialValues: Patient | undefined;
  isModalOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const FormModal = (props: Props) => {
  const { initialValues, isModalOpen, onClose, onSubmit } = props;

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs>(dayjs());
  const [status, setStatus] = useState("Inquiry");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (initialValues) {
      setFirstName(initialValues.first_name);
      setMiddleName(initialValues.middle_name);
      setLastName(initialValues.last_name);
      setDateOfBirth(dayjs(initialValues.date_of_birth));
      setStatus(initialValues.status);
      setAddress(initialValues.address);
      setCity(initialValues.city);
      setStateProvince(initialValues.state_province);
      setZipCode(initialValues.zip_code);
    }
  }, [initialValues]);

  const handleClose = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setDateOfBirth(dayjs());
    setStatus("Inquiry");
    setAddress("");
    setCity("");
    setStateProvince("");
    setZipCode("");
    onClose();
  };

  const addPatient = async () => {
    try {
      await postPatients({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        status: status,
        address: address,
        city: city,
        state_province: stateProvince,
        zip_code: zipCode,
      });

      onSubmit();
      handleClose();
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    }
  };

  const editPatient = async () => {
    try {
      if (initialValues?.id) {
        await putPatients(initialValues?.id, {
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          status: status,
          address: address,
          city: city,
          state_province: stateProvince,
          zip_code: zipCode,
        });

        onSubmit();
        handleClose();
      }
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (initialValues?.id) {
      editPatient();
    } else {
      addPatient();
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
              value={dateOfBirth}
              onChange={(newDate) => setDateOfBirth(dayjs(newDate))}
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
              onChange={(e) => {
                console.log("zip");
                const string = e.target.value;
                const regex = new RegExp(/^\d*$/);
                const isValid = regex.test(string);
                if (isValid) {
                  setZipCode(string);
                }
              }}
              required
            />
          </FieldSection>

          <Buttons>
            <Cancel onClick={handleClose}>Cancel</Cancel>
            <Submit type="submit">{`${
              initialValues?.id ? "Save" : "Add Patient"
            }`}</Submit>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};

export default FormModal;
