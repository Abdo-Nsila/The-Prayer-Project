import userEvent from "@testing-library/user-event";
import { render, fireEvent } from "@testing-library/react";
import Form from "../../src/components/Form/Form";

describe("Form", () => {
  it("Should renders CountrySelect and StateSelect components", () => {
    const { getByText } = render(<Form />);
    expect(getByText(/Country/i)).toBeInTheDocument();
    expect(getByText(/State/i)).toBeInTheDocument();
  });

  it("updates state on CountrySelect change", () => {
    const { getByPlaceholderText } = render(<Form />);
    const countrySelect = getByPlaceholderText(/Country/i);

    fireEvent.change(countrySelect, { target: { value: "1" } });

    expect(countrySelect.value).toBe("1");
  });

  it("updates state on StateSelect change", () => {
    const { getByPlaceholderText } = render(<Form />);
    const countrySelect = getByPlaceholderText(/City/i);

    fireEvent.change(countrySelect, { target: { value: "1" } });

    expect(countrySelect.value).toBe("1");
  });

  it("should not render table and countrySelect and stateSelect are empty", () => {
    const { queryByText, getByPlaceholderText } = render(<Form />);

    expect(queryByText(/Prayer Table/i)).toBeNull();

    const countrySelect = getByPlaceholderText(/Select Country/i);
    expect(countrySelect.value).toBe("");

    const stateSelect = getByPlaceholderText(/Select City/i);
    expect(stateSelect.value).toBe("");
  });
});
