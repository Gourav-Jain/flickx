import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./dashboard";
import * as data from './dashboard.container';

describe("<Dashboard />", () => {

    const mockData = {
        showLoader: false,
        handleChange: jest.fn(),
        handleAddToFav: jest.fn(),
        handleRemoveAddToFave: jest.fn(),
        handleAddToWatchLater: jest.fn(),
        handleRemoveWatchLater: jest.fn(),
        result: [],
        favourites: [],
        watchLater: []
    };

    const useDashboardContainer = jest
        .spyOn(data, "useDashboardContainer")
        .mockReturnValue(mockData);

    beforeEach(() => {
        jest.clearAllMocks();

        useDashboardContainer.mockReturnValue(mockData);
    });

    describe("@actions", () => {
        test("should display Dashboard", () => {
            const dashboard = shallow(<Dashboard />);
            expect(dashboard).toMatchSnapshot();
        });
    });
});