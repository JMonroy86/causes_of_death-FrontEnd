import { Col, Row } from "react-bootstrap";
import { DynamicChart } from "../components/chart";
import { SideBar } from "../components/SideBar";

export const Home = () => {
  return (
    <>
      <Row>
        <Col md={3} className="border-end side-bar">
          <SideBar />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12} className='border-bottom chart'>
              <DynamicChart />
            </Col>
            <Col md={12} className='table'>
              <DynamicChart />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
