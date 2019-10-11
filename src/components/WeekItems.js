import React, {Component} from "react";
import Loader from "react-loader-spinner";
import WeekItem from "./WeekItem";

class WeekItems extends Component {
    componentDidMount() {
        const {fetchWeekWeathers, woeid} = this.props;

        fetchWeekWeathers(woeid);
    }

    render() {
        const {items} = this.props;

        if(items.length) {
            return (
                <div className="weather__week-items">
                    {items.map(item =>
                        <WeekItem key={item.id} item={item}/>
                    )}
                </div>
            );
        } else {
            return (<Loader className="loader" color="#cbd2d" type="Bars" width={50}/>)
        }
    }
}

export default WeekItems;