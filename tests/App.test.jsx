import { render } from "@testing-library/react";
import App from "../src/App"

describe("App", () => {
  it("renders Form component", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Country/i)).toBeInTheDocument();
  });
});
