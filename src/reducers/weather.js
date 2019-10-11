import * as types from "../constants/ActionsTypes";

const initialState = {
    consolidatedWeather: [],
    today: {},
    activeTab: 'today',
    isFetching: false,
};

const weather = (state=initialState, action) => {
    switch(action.type) {
        case types.FETCH_LOCATION_SUCCESS: {
            return {
                ...state,
                woeid: action.woeid,
            }
        }
        case types.FETCH_WEEK_WEATHERS_SUCCESS: {
            return {
                ...state,
                consolidatedWeather: action.consolidatedWeather,
                time: action.time,
                sunRise: action.sunRise,
                sunSet: action.sunSet,
            }
        }
        case types.FETCH_TODAY_WEATHERS_SUCCESS: {
            return {
                ...state,
                today: action.today,
            }
        }
        case types.SWITCH_TABS: {
            return {
                ...state,
                activeTab: action.activeTab,
            }
        }

        default: return state;
    }
};

export default weather;