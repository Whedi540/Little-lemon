import { render, screen } from "@testing-library/react";
import Bookingpage from "../Bookingpage";
import { MemoryRouter } from "react-router-dom";

describe("Bookingpage Component", () => {
  test("renders Hero Section title", () => {
    render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    );
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  test("renders specials section", () => {
    render(
      <MemoryRouter>
        <Bookingpage />
      </MemoryRouter>
    );
    expect(screen.getByText("This Week Specials!")).toBeInTheDocument();
    expect(screen.getByText("Greek salad")).toBeInTheDocument();
    expect(screen.getByText("Bruschetta")).toBeInTheDocument();
  });
});
