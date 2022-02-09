import { Col, Row } from "react-bootstrap";
import { SideBar } from "../components/SideBar";

export const Home = () => {
  return (
    <>
      <Row>
        <Col md={3} className="border-end side-bar">
          <SideBar />
        </Col>
        <Col md={9} className="border chart">
         
        </Col>
      </Row>
    </>
  );
};
