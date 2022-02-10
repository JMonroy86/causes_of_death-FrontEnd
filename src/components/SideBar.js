import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

export const SideBar = () => {
  return (
    <>
      <Row>
        <Col md={6} className="border-bottom border-end text-white bg-opacity-25 bg-secondary pt-2">
          <h5 >Enfermedad</h5>
        </Col>
        <Col md={6} className=" pt-2">
          <h5 className=" fw-bold">Favoritos</h5>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md={12}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Inicie una busqueda"
              aria-label="Inicie una busqueda"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md={12} className='px-5 py-2  search-item-result'>
          <Row>
            <Col md={10}>All Causes</Col>
            <Col md={2}>
              <img src="../img/unfav.png" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Col>
        <Col md={12} className='px-5  py-2 search-item-result'>
          <Row>
            <Col md={10}>Septicemia</Col>
            <Col md={2}>
              <img src="../img/fav.png" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
