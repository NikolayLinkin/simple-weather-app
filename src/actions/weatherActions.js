import * as types from "../constants/ActionsTypes";
import {callApi} from "../utils/api";
import {dateFormatForReq} from "../utils/date";

import {
    WEEK_WEATHER_URL,
    TODAY_WEATHER_URL,
} from "../constants/ApiConstants";

import {getTodayWeather} from "../selectors/weatherSelectors";

const fetchWeekWeathersSuccess = (consolidatedWeather, time, sunRise, sunSet) => ({
    type: types.FETCH_WEEK_WEATHERS_SUCCESS,
    consolidatedWeather,
    time,
    sunRise,
    sunSet,
});

export const fetchWeekWeathers = woeid => async dispatch => {
    const {json} = await (callApi(WEEK_WEATHER_URL(woeid)));

    const {consolidatedWeather, time, sunRise, sunSet} = json;

    dispatch(fetchWeekWeathersSuccess(consolidatedWeather, time, sunRise, sunSet));
};

const fetchTodayWeathersSuccess = (today) => ({
    type: types.FETCH_TODAY_WEATHERS_SUCCESS,
    today,
});

export const fetchTodayWeathers = (woeid, date) => async (dispatch, getState) => {
    const state = getState();
    const todayWeather = getTodayWeather(state);

    if(!Object.keys(todayWeather).length) {
        const {json} = await callApi(TODAY_WEATHER_URL(woeid, dateFormatForReq(date)));

        dispatch(fetchTodayWeathersSuccess(json[0]));
    }
};

export const switchTabs = activeTab => dispatch => {
    dispatch({type: types.SWITCH_TABS, activeTab,});
};