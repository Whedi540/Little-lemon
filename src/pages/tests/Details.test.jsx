import { render, screen } from "@testing-library/react";
import Details from "../Details";
import { MemoryRouter } from "react-router-dom";

const mockState = { number: "4", date: "2025-11-21", time: "19:00" };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ state: mockState }),
  useNavigate: () => jest.fn(),
}));

describe("Details Component", () => {
  test("renders reservation details", () => {
    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
    expect(screen.getByText(/2025-11-21/)).toBeInTheDocument();
    expect(screen.getByText(/19:00/)).toBeInTheDocument();
  });
});
