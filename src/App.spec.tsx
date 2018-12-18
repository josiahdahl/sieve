import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<App />);

  return {
    enzymeWrapper
  };
}

it("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const { enzymeWrapper } = setup();

  expect(enzymeWrapper).toBeTruthy();
});
