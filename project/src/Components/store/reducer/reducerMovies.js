import * as Types from '../types';
const reducerMoviesInitialState = {
    NetFlixOriginals: null
}
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case Types.GET_NETFLIX_ORIGINALS:
            console.log(payload);
            return { ...state }
        default:
            return state;
    }
}
export default reducerMovies;