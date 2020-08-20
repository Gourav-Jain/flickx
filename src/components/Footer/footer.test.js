
import React from "react";
import { shallow } from "enzyme";

import { Footer } from "./footer";

describe("<Footer />", () => {
    const props = {
        favourites: [],
        removeFavourite: jest.fn,
        watchLater: [],
        removeWatchLater: jest.fn
    };

    beforeEach(jest.clearAllMocks);

    describe("@actions", () => {
        test("should display footer", () => {
            const footer = shallow(<Footer {...props} />);
            expect(footer).toMatchSnapshot();
        });
    });
});