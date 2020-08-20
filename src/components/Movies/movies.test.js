import React from "react";
import { shallow } from "enzyme";

import Movies from "./movies";

describe("<Movies />", () => {

    const props = { result: [], addToFavo: jest.fn, addToWatchLater: jest.fn, showLoader: false };

    beforeEach(jest.clearAllMocks);

    describe("@actions", () => {
        test("should display Movies", () => {
            const movies = shallow(<Movies {...props} />);
            expect(movies).toMatchSnapshot();
        });
    });
});