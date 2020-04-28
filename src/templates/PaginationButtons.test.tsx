import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PaginationButtons } from "./PaginationButtons";

const props = {
  count: 100,
  skip: 40,
  limit: 20,
  onChangePage: jest.fn(),
};

beforeEach(() => {
  props.onChangePage.mockClear();
});

test("it renders", () => {
  const { container } = render(<PaginationButtons {...props} />);

  expect(container).toMatchSnapshot();
});

test("render first page", () => {
  const { container } = render(<PaginationButtons {...props} skip={0} />);

  expect(container).toMatchSnapshot();
});

test("render last page", () => {
  const { container } = render(<PaginationButtons {...props} skip={80} />);

  expect(container).toMatchSnapshot();
});

test("on click first", () => {
  const { getByText } = render(<PaginationButtons {...props} />);

  fireEvent.click(getByText("First"));

  expect(props.onChangePage.mock.calls.length).toEqual(1);
  expect(props.onChangePage.mock.calls[0][0]).toEqual({
    page: 1,
    skip: 0,
  });
});

test("on click prev", () => {
  const { getByTestId } = render(<PaginationButtons {...props} />);

  fireEvent.click(getByTestId("prev"));

  expect(props.onChangePage.mock.calls.length).toEqual(1);
  expect(props.onChangePage.mock.calls[0][0]).toEqual({
    page: 2,
    skip: props.limit,
  });
});

test("on click next", () => {
  const { getByTestId } = render(<PaginationButtons {...props} />);

  fireEvent.click(getByTestId("next"));

  expect(props.onChangePage.mock.calls.length).toEqual(1);
  expect(props.onChangePage.mock.calls[0][0]).toEqual({
    page: 4,
    skip: 3 * props.limit,
  });
});

test("on click last", () => {
  const { getByText } = render(<PaginationButtons {...props} />);

  fireEvent.click(getByText("Last"));

  expect(props.onChangePage.mock.calls.length).toEqual(1);
  expect(props.onChangePage.mock.calls[0][0]).toEqual({
    page: 5,
    skip: 4 * props.limit,
  });
});
