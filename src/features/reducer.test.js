import { reducer as searchReducer } from "./reducer";
import * as actions from "./actions";

describe("Create app reducer", () => {
    test.each`
    name                              | reducerFn              | state           | mockData
    ${"sucessfull setSearchMoviesRequest"} | ${"setSearchMoviesRequest"} | ${null} | ${''}
    ${"sucessfull setSearchMoviesResponse"} | ${"setSearchMoviesResponse"} | ${null} | ${''}
    ${"sucessfull setSearchMoviesFailer"} | ${"setSearchMoviesFailer"} | ${null} | ${''}
    ${"sucessfull setAddToFavourites"} | ${"setAddToFavourites"} | ${null} | ${''}
    ${"sucessfull setAddToWatchLater"} | ${"setAddToWatchLater"} | ${null} | ${''}
    ${"sucessfull setRemoveFromFavourite"} | ${"setRemoveFromFavourite"} | ${null} | ${''}
    ${"sucessfull setRemoveFromWatchLater"} | ${"setRemoveFromWatchLater"} | ${null} | ${''}
  `("should return $name", ({ reducerFn, state, mockData }) => {
        const action = reducerFn ? actions[reducerFn](mockData) : {};
        expect(searchReducer(state, action)).toMatchSnapshot();
    });
});
