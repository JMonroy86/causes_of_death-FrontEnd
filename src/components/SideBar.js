import { useState } from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Favorites } from "./favorites";
import { SearchInput } from "./search_input";
import { Search_Results } from "./search_results";

export const SideBar = () => {
  const [tab, setTab] = useState("sickness");
  return (
    <>
      <Row>
        <Col
          onClick={() => setTab("sickness")}
          md={6}
          className={`pt-2 ${
            tab === "favs"
              ? "border-bottom border-end text-white bg-deactivate"
              : ""
          }`}
        >
          <h5 className=" fw-bold">Enfermedad</h5>
        </Col>
        <Col
          onClick={() => setTab("favs")}
          md={6}
          className={`pt-2 ${
            tab === "sickness"
              ? "border-bottom border-end text-white bg-deactivate"
              : ""
          }`}
        >
          <h5 className=" fw-bold">Favoritos</h5>
        </Col>
      </Row>
      {tab === "sickness" ? (
        <>
          <Row className="pt-5">
            <SearchInput />
          </Row>
          <Row className="pt-5">
            <Search_Results />
          </Row>
        </>
      ) : (
        <Row className="pt-5">
          <Favorites />
        </Row>
      )}
    </>
  );
};
