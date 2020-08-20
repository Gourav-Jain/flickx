import initialState from "./initialState";

describe("store", () => {
    test("initialState", () => {
        expect(initialState).toMatchSnapshot();
    });
});