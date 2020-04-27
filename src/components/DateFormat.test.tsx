import React from "react";
import { render } from "@testing-library/react";
import { DateFormat } from "./DateFormat";

const props = {
  date: "2019-07-31T03:08:44.033Z",
  timeZone: "Asia/Tokyo",
};

test("renders foo", () => {
  const { getByText } = render(<DateFormat {...props} />);

  const text = getByText(/2019-07-31 12:08/i);
  expect(text).toBeInTheDocument();
});
