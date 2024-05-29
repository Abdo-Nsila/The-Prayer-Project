import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Form from "../../src/components/Form/Form";

describe("Form", () => {
  it("Should renders CountrySelect and StateSelect components", () => {
    const { getByText } = render(<Form />);
    expect(getByText(/Country/i)).toBeInTheDocument();
    expect(getByText(/State/i)).toBeInTheDocument();
  });

  it("updates state on CountrySelect change", () => {

  });
});
