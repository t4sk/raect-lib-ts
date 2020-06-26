import React from "react";
import { shallow } from "enzyme";
import { Provider, useLangContext } from "./lang";

interface Props {}

const TestComponent: React.FC<Props> = (props) => {
  const { state } = useLangContext();

  return <div>{state}</div>;
};

test("it renders", () => {
  const component = shallow(
    <Provider>
      <TestComponent />
    </Provider>
  );

  expect(component).toMatchSnapshot();
});
