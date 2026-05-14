import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  it("renders 0 on initial mount", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("0");
  });

  it("increments to 1 on click", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    await user.click(screen.getByRole("button", { name: "Increment" }));
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("1");
  });

  it("increments repeatedly", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Increment" });
    await user.click(button);
    await user.click(button);
    await user.click(button);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("3");
  });
});
