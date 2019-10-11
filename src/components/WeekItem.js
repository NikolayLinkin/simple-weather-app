import React from "react";
import {getWeekDay, getMonthName} from "../utils/date";

const WeekItem = ({item}) => {

    const {
        weatherStateName,
        weatherStateAbbr,
        minTemp,
        maxTemp,
        applicableDate,
    } = item;

    const date = new Date(applicableDate);
    return (
        <div className={`week-item week-item--${weatherStateAbbr}`}>
            <div className="week-item__date">
                <div className="week-item__week-day">
                    {getWeekDay(date.getDay())}
                </div>
                <div className="week-item__month-day">
                    {date.getDate()} {getMonthName(date.getMonth())}
                </div>
            </div>
            <div className="week-item__temp">
                <span className="week-item__temp__max">
                    {maxTemp.toFixed(0)}
                </span>
                /
                <span className="week-item__temp__min">
                    {minTemp.toFixed(0)}
                </span>
                <img src={`https://www.metaweather.com/static/img/weather/png/64/${weatherStateAbbr}.png`} alt=""/>
            </div>
        </div>

    );
};

export default WeekItem;