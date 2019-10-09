import * as types from "../constants/ActionsTypes";
import {callApi} from "../utils/api";

import {
    SEARCH_CITY_URL,
    WEEK_WEATHER_URL,
} from "../constants/ApiConstants";

const fetchLocationSuccess = woeid => ({
    type: types.FETCH_LOCATION_SUCCESS,
    woeid,
});

export const fetchLocation = (cityName) =>  async dispatch => {
    const {json} = await callApi(SEARCH_CITY_URL(cityName));
    const {woeid} = json[0];

    dispatch(fetchLocationSuccess(woeid));

    dispatch(fetchWeekWeathers(woeid));

};

const fetchWeekWeathersSuccess = (consolidatedWeather, time, sunRise, sunSet) => ({
    type: types.FETCH_WEEK_WEATHERS_SUCCESS,
    consolidatedWeather,
    time,
    sunRise,
    sunSet,
});

export const fetchWeekWeathers = woeid => async dispatch => {
    const {json} = await(callApi(WEEK_WEATHER_URL(woeid)));

    const {consolidatedWeather, time, sunRise, sunSet} = json;

    dispatch(fetchWeekWeathersSuccess(consolidatedWeather, time, sunRise, sunSet));
};