import { useSelector } from 'react-redux';


export const useSelectorHook = param => useSelector(state => state[param] || state);


export const getSearchMovieApiUrl = (url, key, query) => (
    `${url}?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
)

export const getPopularMovieApiUrl = (url, key) => (
    `${url}?api_key=${key}&language=en-US&page=1`
)

export const updatedFavPayload = (type, action, id, searchMovies) => {
    let payload = {}
    const { searchResult, favourites, watchLater } = searchMovies;
    const lstOfFav = favourites ? [...favourites] : [];
    const lstSrcResult = [...searchResult.result]
    if (type === "fav" && action === "add") {
        if (!lstOfFav.includes(searchResult.result[id])) {
            lstOfFav.push(searchResult.result[id]);
            lstSrcResult[id].fav = true;
            payload = {
                watchLater,
                searchResult: { result: [...lstSrcResult] },
                favourites: [...lstOfFav]
            }
        }
        else {
            payload = {
                watchLater,
                searchResult: { result: [...lstSrcResult] },
                favourites: [...lstOfFav]
            }
        }
    } else if (type === "fav" && action === "rmv") {
        const currObj = lstOfFav[id];
        const idx = lstSrcResult.findIndex(i => i.id === currObj.id);
        if (idx !== -1) {
            lstSrcResult[idx].fav = false;
        }
        lstOfFav.splice(id, 1);
        payload = {
            watchLater,
            searchResult: { result: [...lstSrcResult] },
            favourites: [...lstOfFav]
        }
    }

    return payload;
}

export const updatedWlPayload = (type, action, id, searchMovies) => {
    let payload = {}

    const { searchResult, watchLater, favourites } = searchMovies;
    const lstWatchLater = watchLater ? [...watchLater] : [];
    const lstSrcResult = [...searchResult.result]

    if (type === "wl" && action === "add") {
        if (!lstWatchLater.includes(searchResult.result[id])) {
            lstWatchLater.push(searchResult.result[id]);
            lstSrcResult[id].wl = true;
            payload = {
                searchResult: { result: [...lstSrcResult] },
                watchLater: [...lstWatchLater],
                favourites
            }
        } else {
            payload = {
                searchResult: { result: [...lstSrcResult] },
                watchLater: [...lstWatchLater],
                favourites
            }
        }
    } else if (type === "wl" && action === "rmv") {
        const currObj = lstWatchLater[id];
        const idx = lstSrcResult.findIndex(i => i.id === currObj.id);
        if (idx !== -1) {
            lstSrcResult[idx].wl = false;
        }
        lstWatchLater.splice(id, 1);
        payload = {
            watchLater: [...lstWatchLater],
            searchResult: { result: [...lstSrcResult] },
            favourites
        }
    }

    return payload;
}