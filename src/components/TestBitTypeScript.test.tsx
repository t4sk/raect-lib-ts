import React from "react";
import { render } from "@testing-library/react";
import TestBitTypeScript from "./TestBitTypeScript";

test("renders foo", () => {
  const { getByText } = render(<TestBitTypeScript foo="foo" bar={8} />);
  const text = getByText(/foo 8/i);
  expect(text).toBeInTheDocument();
});
