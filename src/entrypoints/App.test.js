import React from "react";
import { shallow } from "enzyme";

import App from "./App";


describe("<App />", () => {
  const shallowComponent = () => shallow(<App />);

  describe("@renders", () => {
    test("as default", () => {
      expect(shallowComponent()).toMatchSnapshot();
    });
  });
});
