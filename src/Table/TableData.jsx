import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table } from "@radix-ui/themes";
import ReactLoading from "react-loading";

import "./TableData.css";

// import RowTable from './RowTable'

export default function TableData({ country, city }) {
  const [timings, setTimings] = useState([]);

  useEffect(() => {
    const api = () => {
      fetch(
        `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`
      )
        .then((response) => response.json())
        .then((result) => {
          setTimings(result.data.timings);
        })
        .catch((error) => console.log(error));
    };
    api();
  }, [country, city]);

  const showLabel = Object.keys(timings);
  const showTimes = Object.values(timings);



  
  if (!timings || Object.keys(timings).length === 0) {
    return (
      <div className="box">
        <ReactLoading type="spinningBubbles" color="#fff" />;
      </div>
    );
  }

  return (
    <div className="box">
      <h1 style={{ margin: "auto 10px " }}>Prayer Table</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Prayer</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[0]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[0]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[1]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[1]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[2]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[3]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[3]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[4]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[4]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[5]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[5]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[6]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[6]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[7]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[7]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[8]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[8]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[9]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[9]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>{showLabel[10]}</Table.RowHeaderCell>
            <Table.Cell>{showTimes[10]}</Table.Cell>
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
