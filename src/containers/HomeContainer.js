import React from "react";
import {connect} from "react-redux";
import Home from "../components/Home";

import {
    fetchLocation,
    fetchTodayWeathers,
    switchTabs,
    fetchWeekWeathers,
} from "../actions/weatherActions";
import {
    getWeatherWeekItems,
    getWoeid,
    getTodayWeather,
    getActiveTab,
} from "../selectors/weatherSelectors";

const HomeContainer = props => <Home {...props}/>;

const mapStateToProps = state => {
    return {
        weekItems: getWeatherWeekItems(state),
        woeid: getWoeid(state),
        today: getTodayWeather(state),
        activeTab: getActiveTab(state),
    }
};

export default connect(mapStateToProps, {
    fetchLocation,
    fetchTodayWeathers,
    switchTabs,
    fetchWeekWeathers,
})(HomeContainer);