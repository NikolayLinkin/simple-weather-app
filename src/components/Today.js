import React from "react";

const Today = ({minTemp, maxTemp, theTemp, created, applicableDate, weatherStateAbbr, weatherStateName}) => {

    return (
        <div className={`weather__today weather__today--${weatherStateAbbr}`}>
            <div className="weather__today__last-update">
                {created}
            </div>
            <div className="weather__today__date">
                {applicableDate}
            </div>
            <img src={weatherStateName} alt=""/>
            <div className="weather__today__temp">
                <span>{theTemp.toFixed(0)}</span>
                <span>
                    {maxTemp.toFixed(0)}/{minTemp.toFixed(0)}
                </span>
            </div>
        </div>
    );
};

export default Today;