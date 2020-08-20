import { renderHook, act } from "@testing-library/react-hooks";

import { useDashboardContainer } from "./dashboard.container";
import * as action from "../../features/actions";
import {
    useSelectorHook, getSearchMovieApiUrl, getPopularMovieApiUrl,
    API_KEY, API_SERACH_MOVIE_URL, API_POPULAR_MOVIE_URL
} from '../../utils'


jest.mock("react-redux", () => ({
    useDispatch: jest.fn,
    useSelector: () => ({
        searchMovies: {}
    })
}));

const mockPush = jest.fn();
const mockUseDispatch = jest.fn(mockPush);
const handleChange = jest.fn();
describe("useDashboardContainer()", () => {

    beforeEach(jest.clearAllMocks);

    const render = () => {
        const { result } = renderHook(useDashboardContainer);

        return result.current;
    };

    describe("@returns property", () => {

        test("should return data from store", () => {
            const { showLoader } = render();

            expect(showLoader).toMatchSnapshot();
        });

        describe("should return showLoader", () => {
            test("as false on initial render", () => {
                const { showLoader } = render();

                expect(showLoader).toBe(false);
            });
        });
    });
});
