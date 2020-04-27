import React from "react";
import { render } from "@testing-library/react";
import ShortText from "./ShortText";

test("renders foo", () => {
  const { getByText } = render(<ShortText width={100} text="foo bar" />);
  const text = getByText(/foo bar/i);
  expect(text).toBeInTheDocument();
});
