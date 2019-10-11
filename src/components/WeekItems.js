import React, {Component} from "react";
import WeekItem from "./WeekItem";

class WeekItems extends Component {
    componentDidMount() {
        const {fetchWeekWeathers, woeid} = this.props;

        fetchWeekWeathers(woeid);
    }

    render() {
        const {items} = this.props;

        return (
            <div className="weather__week">
                {items.map(item =>
                    <WeekItem key={item.id} item={item}/>
                )}
            </div>
        );
    }
}

export default WeekItems;