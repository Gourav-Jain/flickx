import { useCallback, useEffect, useState } from "react";
import { debounce } from 'lodash';
import { useDispatch } from "react-redux";
import {
    useSelectorHook, getSearchMovieApiUrl, getPopularMovieApiUrl,
    updatedFavPayload, updatedWlPayload,
    API_KEY, API_SERACH_MOVIE_URL, API_POPULAR_MOVIE_URL
} from '../../utils'
import {
    setSearchMoviesRequest, setSearchMoviesResponse, setAddToFavourites,
    setAddToWatchLater, setRemoveFromFavourite, setRemoveFromWatchLater, setSearchMoviesFailer
} from "../../features/actions";

export const useDashboardContainer = () => {
    const { searchMovies } = useSelectorHook();
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        fetchMovies('');
    }, [])

    const fetchMovies = (value) => {
        const payload = { showLoader: true }
        dispatch(setSearchMoviesRequest(payload));
        const url = value ? getSearchMovieApiUrl(API_SERACH_MOVIE_URL, API_KEY, value) : getPopularMovieApiUrl(API_POPULAR_MOVIE_URL, API_KEY);
        //const url = `http://localhost:3001/search/movies/?q=${value}`;
        fetch(url, { method: "GET" }).then(data => {

            if (data.status === 200) {

                data.json().then(
                    res => {
                        if (res.results.length > 0) {
                            const payload = {
                                showLoader: false,
                                isSearch: value ? true : false,
                                searchResult: { result: res["results"] },
                            };

                            setErrorMessage('');
                            dispatch(setSearchMoviesResponse(payload));
                        } else {
                            const payload = {
                                error: true,
                                showLoader: false,
                            };
                            setErrorMessage('No movies found...');
                            dispatch(setSearchMoviesFailer(payload));
                        }
                    }
                )
            } else {
                const payload = {
                    error: true,
                    showLoader: false,
                };
                setErrorMessage('Opps, something went wrong... :(');
                dispatch(setSearchMoviesFailer(payload));
            }
        }).catch((error) => {
            if (error) {
                const payload = {
                    error: true,
                    showLoader: false,
                };
                setErrorMessage(error);
                dispatch(setSearchMoviesFailer(payload));
            }
        });
    }

    const debQry = useCallback(debounce((value) => fetchMovies(value), 500), []);

    const handleChange = e => {
        debQry(e.target.value);
    };


    // handle add to favourits list
    const handleAddToFav = (id) => {
        const payload = updatedFavPayload("fav", "add", id, searchMovies);
        dispatch(setAddToFavourites(payload));
    }

    // handle remove from favourits list
    const handleRemoveAddToFave = (id) => {
        const payload = updatedFavPayload("fav", "rmv", id, searchMovies);
        dispatch(setRemoveFromFavourite(payload));
    }

    // handle add to watch later list
    const handleAddToWatchLater = (id) => {
        const payload = updatedWlPayload("wl", "add", id, searchMovies);
        dispatch(setAddToWatchLater(payload));
    }

    // handle remove watch later list
    const handleRemoveWatchLater = (id) => {

        const payload = updatedWlPayload("wl", "rmv", id, searchMovies);
        dispatch(setRemoveFromWatchLater(payload));
    }

    return {
        showLoader: searchMovies.showLoader || false,
        error: searchMovies.error || false,
        errorMessage,
        handleChange,
        fetchMovies,
        handleAddToFav,
        handleAddToWatchLater,
        handleRemoveAddToFave,
        handleRemoveWatchLater,
        ...searchMovies.searchResult,
        favourites: searchMovies.favourites || [],
        watchLater: searchMovies.watchLater || [],
    };
};