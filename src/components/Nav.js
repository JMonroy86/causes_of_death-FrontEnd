import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="shadow-sm border-bottom">
      <Container fluid>
        <Navbar.Brand className="nav-title">Visor de causas de muertes EEUU</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
