import React from "react";
import {connect} from "react-redux";
import Home from "../components/Home";

import {
    fetchLocation
} from "../actions/weatherActions";
import {
    getWeatherWeekItems
} from "../selectors/weatherSelectors";

const HomeContainer = props => <Home {...props}/>;

const mapStateToProps = state => {
    return {
        weekItems: getWeatherWeekItems(state),
    }
};

export default connect(mapStateToProps, {
    fetchLocation,
})(HomeContainer);