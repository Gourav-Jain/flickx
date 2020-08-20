import React from "react";
import { shallow } from "enzyme";

import Header from "./header";

describe("<Header />", () => {

    beforeEach(jest.clearAllMocks);

    describe("@actions", () => {
        test("should display header", () => {
            const header = shallow(<Header />);
            expect(header).toMatchSnapshot();
        });
    });
});