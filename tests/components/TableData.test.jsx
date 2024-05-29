import { render, screen } from "@testing-library/react";
import TableData from "../../src/components/Table/TableData";
import { it, expect, describe } from "vitest";

describe("TableData", () => {
  it("renders TableData component with props", async () => {
    const { container } = render(<TableData country="Morocco" city="Marrakech" />);

    expect(container).not.toBeEmptyDOMElement()
  });
});
