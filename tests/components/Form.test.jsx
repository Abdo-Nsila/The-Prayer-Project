import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Form from "../../src/components/Form/Form";
import { vi } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          timings: {
            Fajr: "04:00 AM",
            Dhuhr: "12:00 PM",
            Asr: "03:00 PM",
            Maghrib: "06:00 PM",
            Isha: "08:00 PM",
          },
        },
      }),
  }),
);

vi.mock("react-country-state-city", () => ({
  CountrySelect: ({ onChange }) => (
    <select
      data-testid="country-select"
      onChange={(e) => onChange({ id: 1, name: e.target.value })}
    >
      <option value="">Select Country</option>
      <option value="TestCountry">TestCountry</option>
    </select>
  ),
  StateSelect: ({ onChange }) => (
    <select
      data-testid="state-select"
      onChange={(e) => onChange({ name: e.target.value })}
    >
      <option value="">Select City</option>
      <option value="TestCity">TestCity</option>
    </select>
  ),
}));

describe("Form", () => {
  it("renders CountrySelect and StateSelect components", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("country-select")).toBeInTheDocument();
    expect(getByTestId("state-select")).toBeInTheDocument();
  });

  it("updates state on CountrySelect change", () => {
    const { getByTestId } = render(<Form />);
    const countrySelect = getByTestId("country-select");

    fireEvent.change(countrySelect, { target: { value: "TestCountry" } });

    expect(countrySelect.value).toBe("TestCountry");
  });

  it("updates state on StateSelect change", () => {
    const { getByTestId } = render(<Form />);
    const stateSelect = getByTestId("state-select");

    fireEvent.change(stateSelect, { target: { value: "TestCity" } });

    expect(stateSelect.value).toBe("TestCity");
  });

  it("should not render the table initially", () => {
    const { queryByText, getByTestId } = render(<Form />);

    expect(queryByText(/Prayer Table/i)).toBeNull();

    const countrySelect = getByTestId("country-select");
    expect(countrySelect.value).toBe("");

    const stateSelect = getByTestId("state-select");
    expect(stateSelect.value).toBe("");
  });

  it("should render the table after country and state are selected", async () => {
    const { getByTestId, getByText } = render(<Form />);

    const countrySelect = getByTestId("country-select");
    fireEvent.change(countrySelect, { target: { value: "TestCountry" } });

    const stateSelect = getByTestId("state-select");
    fireEvent.change(stateSelect, { target: { value: "TestCity" } });

    await waitFor(() => {
      expect(getByText(/Prayer Table/i)).toBeInTheDocument();
    });

    expect(getByText("Fajr")).toBeInTheDocument();
    expect(getByText("04:00 AM")).toBeInTheDocument();
    expect(getByText("Dhuhr")).toBeInTheDocument();
    expect(getByText("12:00 PM")).toBeInTheDocument();
    expect(getByText("Asr")).toBeInTheDocument();
    expect(getByText("03:00 PM")).toBeInTheDocument();
    expect(getByText("Maghrib")).toBeInTheDocument();
    expect(getByText("06:00 PM")).toBeInTheDocument();
    expect(getByText("Isha")).toBeInTheDocument();
    expect(getByText("08:00 PM")).toBeInTheDocument();
  });
});
