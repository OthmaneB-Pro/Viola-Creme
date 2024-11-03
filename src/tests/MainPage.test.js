import { render, screen } from "@testing-library/react";
import MainPage from "../components/pages/homePage/main/MainPage";

test("MainPage has image", () => {
  render(<MainPage />);
  const ImageElement = screen.getByRole("img");
  expect(ImageElement).toBeInTheDocument();
});

test("MainPage has Button", () => {
  render(<MainPage />);
  const ButtonElement = screen.getByRole("button");
  expect(ButtonElement).toBeInTheDocument();
});
test("MainPage has Title and Text", () => {
  render(<MainPage />);
  const TitleElement = screen.getByRole("heading", { level: 1 });
  const TextElement = screen.getByText(
    /Découvrez la puissance des ingrédients/i
  );
  expect(TitleElement).toBeInTheDocument();
  expect(TextElement).toBeInTheDocument();
});
