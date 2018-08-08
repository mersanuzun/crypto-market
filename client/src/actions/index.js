import * as types from "./types";
import axios from "axios";

export const fetchCoin = (coinSymbol) => {
    return async (dispatch) => {
        dispatch(
            {
                type: types.FETCHING_COIN
            }
        )
        axios
            .get(`http://localhost:8090/coin?search=${coinSymbol}`)
            .then(res => {
                dispatch(
                    {
                        type: types.FETCHED_COIN,
                        data: res.data
                    }
                );
            })
            .catch(err => {
                dispatch(
                    {
                        type: types.ERROR_FETCH_COIN,
                        data: err.response.data
                    }
                )
            });
    }
}
