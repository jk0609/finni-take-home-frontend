import { useState, useEffect, useContext, useCallback } from "react";
import { getPatients } from "../Utils/api";
import FiltersContext from "../StateManagement/Filters/FiltersContext";
import type { Patient } from "../Utils/types";

const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { state: filtersState } = useContext(FiltersContext);
  const {
    firstName,
    middleName,
    lastName,
    age: [ageMin, ageMax],
    status,
    address,
    city,
    stateProvince,
    zipCode,
  } = filtersState;

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const patients = await getPatients();
      setPatients(patients);
    } catch (err) {
      // @JonK: handle error
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPatients = useCallback(() => {
    const filtered = patients.filter(
      (patient) =>
        (!firstName ||
          patient.first_name.toLowerCase().includes(firstName.toLowerCase())) &&
        (!middleName ||
          patient.middle_name
            .toLowerCase()
            .includes(middleName.toLowerCase())) &&
        (!lastName ||
          patient.last_name.toLowerCase().includes(lastName.toLowerCase())) &&
        (!status || patient.status === status) &&
        (!address ||
          patient.address.toLowerCase().includes(address.toLowerCase())) &&
        (!city || patient.city.toLowerCase().includes(city.toLowerCase())) &&
        (!stateProvince ||
          patient.state_province
            .toLowerCase()
            .includes(stateProvince.toLowerCase())) &&
        (!zipCode || patient.zip_code.toString().includes(zipCode)) &&
        patient.age >= ageMin &&
        patient.age <= ageMax
    );

    setFilteredPatients(filtered);
  }, [
    patients,
    firstName,
    middleName,
    lastName,
    ageMin,
    ageMax,
    status,
    address,
    city,
    stateProvince,
    zipCode,
  ]);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    filterPatients();
  }, [filterPatients]);

  return { filteredPatients, isLoading, fetchPatients };
};

export default usePatients;
