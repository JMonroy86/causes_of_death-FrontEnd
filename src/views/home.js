import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { DynamicChart } from "../components/chart";
import { SideBar } from "../components/SideBar";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store } = useContext(Context);
  return (
    <>
      <Row>
        <Col md={3} className="border-end side-bar">
          <SideBar />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={12} className="border-bottom chart">
              <Col md={12} className="ps-2 py-4">
                <h4>{store.chartName}</h4>
              </Col>
              <DynamicChart />
            </Col>
            <Col md={12} className="table">
              {/* <DynamicChart /> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
