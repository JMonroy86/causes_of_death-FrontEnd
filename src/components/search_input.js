import { useContext, useState } from "react";
import { Col, FormControl, InputGroup } from "react-bootstrap";
import { Context } from "../store/appContext";

export const SearchInput = () => {
  const {actions} = useContext(Context)
  const [criteria, setCriteria] = useState('')
  const handleChange = e =>{
    setCriteria(e.target.value)
    actions.searchTag(e.target.value)
  }
  return (
    <Col md={12}>
      <InputGroup className="mb-3">
        <FormControl
          onChange={e=>handleChange(e)}
          value={criteria}
          placeholder="Inicie una busqueda"
          aria-label="Inicie una busqueda"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Col>
  );
};
