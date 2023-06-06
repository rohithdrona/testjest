import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

import { replaceCamelwithSpaces } from "./App";

test("button has correct Initial color", () => {
  render(<App />);
  let colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("button turns blue", () => {
  render(<App />);
  let colorButton = screen.getByRole("button");
  expect(colorButton).toHaveStyle({ "background-color": "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
  expect(colorButton).toHaveTextContent("Red");
});

test("disable button when checked", () => {
  render(<App />);
  let button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  let checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("color to grey", () => {
  render(<App />);

  let button = screen.getByRole("button");
  let checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": "red" });
});

test("color to blue", () => {
  render(<App />);

  let button = screen.getByRole("button");
  let checkbox = screen.getByRole("checkbox");

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ "background-color": "blue" });
});

describe("Spaces before camelcase", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelwithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelwithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelwithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
