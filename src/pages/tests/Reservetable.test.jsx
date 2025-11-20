import { render, screen, fireEvent } from "@testing-library/react";
import Reservetable from "../Reservetable";
import { MemoryRouter } from "react-router-dom";

describe("Reservetable Component", () => {
  test("renders reservation form", () => {
    render(
      <MemoryRouter>
        <Reservetable />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("Number of Diners")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("date")).not.toBeNull();
    expect(screen.getByPlaceholderText("time")).not.toBeNull();
  });

  test("submit button exists", () => {
    render(
      <MemoryRouter>
        <Reservetable />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /Continue/i })).toBeInTheDocument();
  });
});
