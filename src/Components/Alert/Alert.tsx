import { useContext } from "react";
import { Container, Message } from "./Alert.styles";
import AlertContext from "../../StateManagement/Alert/AlertContext";

const Alert = () => {
  const { state, dispatch } = useContext(AlertContext);
  const { error } = state;

  const handleClose = () => {
    dispatch({
      type: "UPDATE_ERROR",
      payload: "",
    });
  };

  return (
    <Container open={!!error} autoHideDuration={5000} onClose={handleClose}>
      <Message onClose={handleClose} severity="error" variant="filled">
        {error}
      </Message>
    </Container>
  );
};

export default Alert;
