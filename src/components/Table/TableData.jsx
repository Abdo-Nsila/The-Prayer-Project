import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table } from "@radix-ui/themes";
import ReactLoading from "react-loading";

export default function TableData({ country, city }) {
  const [timings, setTimings] = useState([]);

  useEffect(() => {
    const api = () => {
      fetch(
        `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=8`,
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
  const showData = showLabel.map((label, i) => {
    return (
      <Table.Row key={i}>
        <Table.RowHeaderCell>{label}</Table.RowHeaderCell>
        <Table.Cell>{showTimes[i]}</Table.Cell>
      </Table.Row>
    );
  });

  if (!timings || Object.keys(timings).length === 0) {
    return (
      <div className="box">
        <ReactLoading type="spinningBubbles" color="#eee" />
      </div>
    );
  }

  return (
    <div className="box w-full flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl text-neutral-200">Prayer Table</h1>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Prayer</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{showData}</Table.Body>
      </Table.Root>
    </div>
  );
}

TableData.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
