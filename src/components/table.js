import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Table_data = () => {
  const { store } = useContext(Context);
  return (
    <Table striped bordered hover size="sm" className="mt-4">
      <thead>
        <tr>
          <th>Year</th>
          <th>Month</th>
          {store.table_data?.tags.map((tag) => {
            return <th key={tag.id}>{tag.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {store.table_data?.causes.map((cause) => {
          return (
            <tr key={cause.id} className="text-center">
              <td>{cause.year}</td>
              <td>{cause.month}</td>
              {store.table_data?.tags.map((tag) => {
                return (
                  <>
                    <td>{cause[tag.slug]}</td>
                  </>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
