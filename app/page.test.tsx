import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("page renders Counter with 0 in SSR output", () => {
  it("renders the digit 0 in the heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("0");
  });

  it("renders a button with accessible name 'Increment'", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Increment" })).toBeInTheDocument();
  });
});
