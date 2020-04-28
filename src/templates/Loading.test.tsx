import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Loading } from "./Loading";

const props = {
  loading: false,
  error: "",
  onClickRetry: jest.fn(),
  children: () => null,
};

beforeEach(() => {
  props.onClickRetry.mockClear();
});

test("it renders", () => {
  const { container } = render(<Loading {...props} />);

  expect(container).toMatchSnapshot();
});

test("loading", () => {
  const { container } = render(<Loading {...props} loading={true} />);

  expect(container).toMatchSnapshot();
});

test("render loading", () => {
  const renderLoading = () => <div>render loading</div>;
  const { container } = render(
    <Loading {...props} loading={true} renderLoading={renderLoading} />
  );

  expect(container).toMatchSnapshot();
});

test("error", () => {
  const { container } = render(<Loading {...props} error="error" />);

  expect(container).toMatchSnapshot();
});

test("render error", () => {
  const renderError = ({ error }: { error: string }) => (
    <div>render {error}</div>
  );
  const { container } = render(
    <Loading {...props} error="error" renderError={renderError} />
  );

  expect(container).toMatchSnapshot();
});

test("onClickRetry", () => {
  const { getByText } = render(<Loading {...props} error="error" />);

  fireEvent.click(getByText("Retry"));

  expect(props.onClickRetry.mock.calls.length).toEqual(1);
});
