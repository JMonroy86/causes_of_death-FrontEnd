import { useContext } from "react";
import { Context } from "../store/appContext";
import { Col, Row } from "react-bootstrap";

export const Search_Results = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.search_tags_result !== null ? (
        <>
          {store.search_tags_result.map((tag) => {
            const isFav = store.favorites?.some((item) => item.id === tag.id);
            return (
              <Col
                key={tag.id}
                md={12}
                className="px-5 py-2  search-item-result"
                onClick={() =>
                  isFav
                    ? actions.remove_from_favorite(tag)
                    : actions.add_to_favorite(tag)
                }
              >
                <Row>
                  <Col md={10}>{tag.name}</Col>
                  <Col md={2}>
                    <img
                      src={isFav ? "../img/fav.png" : "../img/unfav.png"}
                      className="img-fluid"
                      alt=""
                    />
                  </Col>
                </Row>
              </Col>
            );
          })}
        </>
      ) : (
        store.search_tags_result === null && (
          <Col className="text-center">
            <h4>Por favor ingrese causa a buscar</h4>
          </Col>
        )
      )}
    </>
  );
};
