import { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavBar = () => {
  const { store, actions } = useContext(Context);
  return (
    <Navbar
      expand="lg"
      variant="light"
      bg="light"
      className="shadow-sm border-bottom"
    >
      <Container fluid>
        <Navbar.Brand className="nav-title">
          Visor de causas de muertes EEUU
        </Navbar.Brand>
        {store.db_data === null && (
          <Button onClick={() => actions.populateData()}>Click to start</Button>
        )}
      </Container>
    </Navbar>
  );
};
