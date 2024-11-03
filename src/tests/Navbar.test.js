import { render, screen } from "@testing-library/react";
import Navbar from "../components/pages/homePage/navbar/Navbar";

test("Titre présent", () => {
  render(<Navbar />);
  const TitleElement = screen.getByRole("heading", { level: 1 });
  expect(TitleElement).toBeInTheDocument();
});
test("Navbar right element", () => {
  render(<Navbar />);
  const RightNavbarElement = screen.getByRole("list");
  const ButtonElement = screen.getByRole("button");
  expect(RightNavbarElement).toBeInTheDocument();
  expect(ButtonElement).toBeInTheDocument();
});
