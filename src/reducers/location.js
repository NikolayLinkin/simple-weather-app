import * as types from "../constants/ActionsTypes";

const initialState = {
    woeid: 2122265,//в реальном приложении будет null
    time: null,
    sunRise: null,
    sunSet: null,
};

//редюсер для эмуляции реальной работы приложения
const location = (state=initialState, action) => {
    switch(action.type) {
        case types.FETCH_LOCATION_SUCCESS: {
            return {
                woeid: action.woeid,
                time: action.time,
                sunRise: action.sunRise,
                sunSet: action.sunSet,
            }
        }
        
        default: return state;
    }
};

export default location;