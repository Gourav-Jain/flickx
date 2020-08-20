import * as actions from "./actions";

describe("@actions and @creators", () => {
    describe("actions", () => {
        const searchActions = [actions.SEARCH_MOVIES_REQS,
        actions.SEARCH_MOVIES_RESP,
        actions.SEARCH_MOVIES_FAIL,
        actions.ADD_TO_FAVOURITE,
        actions.ADD_TO_WATCH_LATER,
        actions.REMOVE_FROM_FAVOURITE,
        actions.REMOVE_FROM_WATCH_LATER];

        test.each(searchActions)("should return %s action", actionType =>
            expect(actions[actionType]).toMatchSnapshot()
        );
    });

    describe("creators", () => {
        test.each`
      creatorName       | mockData
      ${"setSearchMoviesRequest"} | ${"mock-data"}
      ${"setSearchMoviesResponse"} | ${"mock-data"}
      ${"setSearchMoviesFailer"} | ${"mock-data"}
      ${"setAddToFavourites"} | ${"mock-data"}
      ${"setAddToWatchLater"} | ${"mock-data"}
      ${"setRemoveFromFavourite"} | ${"mock-data"}
      ${"setRemoveFromWatchLater"} | ${"mock-data"}
    `("$creatorName returns correctly", ({ creatorName, mockData }) => {
            expect(actions[creatorName](mockData)).toMatchSnapshot();
        });
    });
});