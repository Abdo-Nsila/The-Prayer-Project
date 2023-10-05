import PropTypes from "prop-types";
import { Table } from "@radix-ui/themes";

import "./TableData.css";

export default function TableData() {
  return (
    <div className="box">
      <h1 style={{ margin: "10px" }}>MATRICE</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Sophie</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Rachid</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Laure</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amadou</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Jean</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Equipe Project</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Developpement</Table.RowHeaderCell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>I</Table.Cell>
            <Table.Cell>R</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Definition</Table.RowHeaderCell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>R</Table.Cell>
            <Table.Cell>I</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>C</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Conception</Table.RowHeaderCell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>R</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>C</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Test</Table.RowHeaderCell>
            <Table.Cell></Table.Cell>
            <Table.Cell>I</Table.Cell>
            <Table.Cell>I</Table.Cell>
            <Table.Cell>R</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Integration</Table.RowHeaderCell>
            <Table.Cell></Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>I</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
}

TableData.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
