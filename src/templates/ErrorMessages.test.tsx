import React from "react";
import { render } from "@testing-library/react";
import { ErrorMessages } from "./ErrorMessages";

const props = {
  errors: [],
};

test("no error", () => {
  const { container } = render(<ErrorMessages {...props} />);

  expect(container).toMatchSnapshot();
});

test("one error", () => {
  const { container } = render(<ErrorMessages {...props} errors={["error"]} />);

  expect(container).toMatchSnapshot();
});

test("many errors", () => {
  const { container } = render(
    <ErrorMessages {...props} errors={["error 1", "error 2"]} />
  );

  expect(container).toMatchSnapshot();
});
