import React, {Component} from "react";
import PropTypes from "prop-types";

import Loader from "react-loader-spinner";

import Tabs from "./Tabs";
import WeekItems from "./WeekItems";
import Today from "./Today";

class Weather extends Component {
    static propTypes = {
        weekItems: PropTypes.array.isRequired,
        today: PropTypes.object.isRequired,
        woeid: PropTypes.number.isRequired,
        activeTab: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);

        this.onClickTab = this.onClickTab.bind(this);
    }

    onClickTab(tabName) {
        const {
            switchTabs,
            activeTab,
        } = this.props;

        if(activeTab !== tabName) {
            switchTabs(tabName);
        }
    }

    render() {
        const {
            weekItems,
            fetchWeekWeathers,
            fetchTodayWeathers,
            woeid,
            activeTab,
            today,
            isFetching,
        } = this.props;

        if(isFetching) {
            return (<Loader type="Bars" color="#cbd2d" width={50} height={50}/>)
        }

        return (
            <div className={`wrapper ${activeTab === 'today' ? `wrapper--${today.weatherStateAbbr}` : '' }`}>
                <Tabs activeTab={activeTab} onClickTab={this.onClickTab}/>

                {activeTab === 'today' ?
                    <Today fetchTodayWeathers={fetchTodayWeathers}
                           woeid={woeid}
                           today={today}
                    /> : ''}
                {activeTab === 'week' ?
                    <WeekItems fetchWeekWeathers={fetchWeekWeathers}
                               woeid={woeid}
                               items={weekItems}
                    />
                    : ''}
            </div>
        );
    }
}

export default Weather;