import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("renders logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders menu items on desktop", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("mobile menu toggles on button click", () => {
    render(<Navbar />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Home")).toBeVisible();
    fireEvent.click(button);
    // menu should collapse
  });
});
