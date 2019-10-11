import * as types from "../constants/ActionsTypes";
import {callApi} from "../utils/api";
import {SEARCH_CITY_URL} from "../constants/ApiConstants";

const fetchLocationSuccess = woeid => ({
    type: types.FETCH_LOCATION_SUCCESS,
    woeid,
});

export const fetchLocation = (cityName) => async dispatch => {
    const {json} = await callApi(SEARCH_CITY_URL(cityName));
    const {woeid} = json[0];

    dispatch(fetchLocationSuccess(woeid));
};