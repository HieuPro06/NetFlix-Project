import axios from "axios";
import * as Types from "../types"

const API_KEY = "e0669d426c0a455d1f1a29d3ecbb44ee";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetFlixOriginal = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/dicover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({ type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.result })
    } catch (error) {
        console.log('Get NetFlix API error', error);
    }
}