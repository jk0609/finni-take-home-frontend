import { apiUrl } from "./config";

const getPatients = async () => {
  const response = await fetch(`${apiUrl}/patients`);
  const patients = await response.json();

  if (response.status !== 200) {
    throw new Error("There was an error retrieving patients");
  }

  return patients;
};

const postPatients = async (body: Record<string, unknown>) => {
  const response = await fetch(`${apiUrl}/patients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    throw new Error("There was an error adding this patient");
  }
};

const putPatients = async (id: string, body: Record<string, unknown>) => {
  const response = await fetch(`${apiUrl}/patients/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    throw new Error("There was an error editing this patient");
  }
};

const deletePatients = async (id: string) => {
  const response = await fetch(`${apiUrl}/patients/${id}`, {
    method: "DELETE",
  });

  if (response.status !== 200) {
    throw new Error("There was an error deleting this patient");
  }
};

export { getPatients, postPatients, putPatients, deletePatients };
