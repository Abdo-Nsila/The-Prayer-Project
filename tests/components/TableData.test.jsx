import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TableData from "../../src/components/Table/TableData";

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

describe("TableData Component", () => {
  it("displays loading spinner initially", () => {
    render(<TableData country="TestCountry" city="TestCity" />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("displays table data after fetching", async () => {
    render(<TableData country="TestCountry" city="TestCity" />);

    // Wait for the fetch call to complete and the component to re-render
    const fajrTime = await screen.findByText(/04:00 AM/i);
    expect(fajrTime).toBeInTheDocument();

    const dhuhrTime = await screen.findByText(/12:00 PM/i);
    expect(dhuhrTime).toBeInTheDocument();

    const asrTime = await screen.findByText(/03:00 PM/i);
    expect(asrTime).toBeInTheDocument();

    const maghribTime = await screen.findByText(/06:00 PM/i);
    expect(maghribTime).toBeInTheDocument();

    const ishaTime = await screen.findByText(/08:00 PM/i);
    expect(ishaTime).toBeInTheDocument();
  });

  it("displays the table headers correctly", async () => {
    render(<TableData country="TestCountry" city="TestCity" />);

    // Wait for the fetch call to complete and the component to re-render
    await screen.findByText("04:00 AM");

    const prayerHeader = screen.getAllByText("Prayer")[0];
    expect(prayerHeader).toBeInTheDocument();

    const timeHeader = screen.getAllByText("Time")[0];
    expect(timeHeader).toBeInTheDocument();
  });
});
