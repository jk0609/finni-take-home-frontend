import { useState, useEffect } from "react";
import { apiUrl } from "../../Utils/config";
import {
  Container,
  Table,
  Head,
  Body,
  Row,
  Cell,
} from "./PatientsTable.styles";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`${apiUrl}/patients`);
        const patients = await response.json();

        if (response.status !== 200) {
          throw new Error("There was an error retrieving patients");
        }

        setPatients(patients);
      } catch (err) {
        // @JonK: handle error
        console.error(err);
      }
    };
    fetchPatients();
  }, []);

  return (
    <Container>
      <Table>
        <Head>
          <Row>
            <Cell>Name</Cell>
            <Cell>Middle Name</Cell>
            <Cell>Date of Birth</Cell>
            <Cell>Status</Cell>
            <Cell>Address</Cell>
            <Cell>City</Cell>
            <Cell>State/Province</Cell>
            <Cell>Zip Code</Cell>
          </Row>
        </Head>
        <Body>
          {patients.map((patient) => {
            const {
              id,
              first_name,
              middle_name,
              last_name,
              date_of_birth,
              status,
              address_one,
              address_two,
              city,
              state_province,
              zip_code,
            } = patient;
            return (
              <Row key={id}>
                <Cell>{`${first_name} ${last_name}`}</Cell>
                <Cell>{middle_name}</Cell>
                <Cell>{date_of_birth}</Cell>
                <Cell>{status}</Cell>
                <Cell>{`${address_one} ${address_two}`}</Cell>
                <Cell>{city}</Cell>
                <Cell>{state_province}</Cell>
                <Cell>{zip_code}</Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </Container>
  );
};

export default PatientsTable;
