import { Table } from "@radix-ui/themes";


export default function RowTable(key, label, time) {
  return (
    <Table.Row key={key}>
      <Table.RowHeaderCell>{label}</Table.RowHeaderCell>
      <Table.Cell>{time}</Table.Cell>
    </Table.Row>
  );
}
