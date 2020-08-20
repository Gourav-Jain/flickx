import React from "react";
import { shallow } from "enzyme";

import { FavoriteList } from "./favlist";

describe("<FavoriteList />", () => {
    const props = {
        items: [],
        clicked: jest.fn
    };

    beforeEach(jest.clearAllMocks);

    describe("@actions", () => {
        test("should display fav list", () => {
            const favlist = shallow(<FavoriteList {...props} />);
            expect(favlist).toMatchSnapshot();
        });
    });
});