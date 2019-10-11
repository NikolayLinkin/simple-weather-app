import React, {Component} from "react";
import Loader from "react-loader-spinner";
import {getMonthName, getWeekDay} from "../utils/date";

class Today extends Component {
    componentDidMount() {
        const {fetchTodayWeathers, woeid} = this.props;
        fetchTodayWeathers(woeid, new Date());
    }

    render() {
        const renderDate = (date) => {
            const weekDayNumber = new Date().getDay();
            const monthNumber = new Date().getMonth();
            return `${getWeekDay(weekDayNumber)}, ${monthNumber} ${getMonthName(monthNumber)}`;
        };

        const {
            minTemp,
            maxTemp,
            theTemp,
            created,
            applicableDate,
            weatherStateAbbr,
            weatherStateName
        } = this.props.today;

        if (Object.keys(this.props.today).length) {
            return (
                <div className={`weather__today weather__today--${weatherStateAbbr}`}>
                    <div className="weather__today__date">
                        {renderDate(applicableDate)}
                    </div>
                    <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`}
                         className="weather__today__img"
                         alt=""/>
                    <div className="weather__today__temp-type">
                        {weatherStateName}
                    </div>
                    <div className="weather__today__temp">
                        {theTemp.toFixed(0)}&deg;
                    </div>
                </div>
            );
        } else {
            return (<Loader className="loader" type="Bars" color="#cbd2d" width={50} height={50}/>)
        }
    }
}

export default Today;