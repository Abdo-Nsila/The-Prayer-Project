import { render, screen, waitFor } from "@testing-library/react";
import TableData from "../../src/components/Table/TableData";

describe("TableData", () => {
  it("renders TableData component with props", async () => {
    render(<TableData country="morocco" city="marrakech" />);
    const textElement = await screen.findByText(/Prayer Table/i);

    await waitFor(() => expect(textElement).toBeInTheDocument());
  });
});
