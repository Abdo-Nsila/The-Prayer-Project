import { render, screen } from "@testing-library/react";
import TableData from "../../src/components/Table/TableData";

describe("TableData", () => {
  it("renders TableData component with props", async () => {
    render(<TableData country="Morocco" city="Marrakech" />);
    const textElement = await screen.findByText(/Prayer Table/i);

    expect(textElement).toBeInTheDocument();
  });
});
