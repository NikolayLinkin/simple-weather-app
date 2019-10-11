import React from "react";
import {connect} from "react-redux";
import Weather from "../components/Weather";

import {
    fetchTodayWeathers,
    switchTabs,
    fetchWeekWeathers,
} from "../actions/weatherActions";
import {
    getWeatherWeekItems,
    getWoeid,
    getTodayWeather,
    getWeatherActiveTab,
    weatherFetching,
} from "../selectors/weatherSelectors";

const WeatherContainer = props => <Weather {...props}/>;

const mapStateToProps = state => {
    return {
        weekItems: getWeatherWeekItems(state),
        woeid: getWoeid(state),
        today: getTodayWeather(state),
        activeTab: getWeatherActiveTab(state),
        isFetching: weatherFetching(state),
    }
};

export default connect(mapStateToProps, {
    fetchTodayWeathers,
    switchTabs,
    fetchWeekWeathers,
})(WeatherContainer);