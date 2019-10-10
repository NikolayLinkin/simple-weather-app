import React, {Component} from "react";

class Today extends Component {
    componentDidMount() {
        const {fetchTodayWeathers, woeid} = this.props;
        fetchTodayWeathers(woeid, new Date());
    }

    render() {
        const {
            minTemp,
            maxTemp,
            theTemp,
            created,
            applicableDate,
            weatherStateAbbr,
            weatherStateName
        } = this.props.today;
        if(Object.keys(this.props.today).length) {
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
        } else {return (<div>Загрузка</div>)}
    }
}
export default Today;