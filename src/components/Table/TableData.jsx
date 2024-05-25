import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table } from "@radix-ui/themes";
import ReactLoading from "react-loading";

// The api is stored in the .env file
const apiUrl = import.meta.env.VITE_API_URL;

export default function TableData({ country, city }) {
  const [timings, setTimings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = () => {
      setLoading(true);
      fetch(`${apiUrl}&city=${city}&country=${country}`)
        .then((response) => response.json())
        .then((result) => {
          setTimings(result.data.timings);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
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

  if (loading) {
    return <Loading />;
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

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <ReactLoading type="spinningBubbles" color="#fff" />
    </div>
  );
};

TableData.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
