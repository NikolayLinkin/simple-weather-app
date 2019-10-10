import React, {Component} from "react";
import WeekItem from "./WeekItem";

class WeekItems extends Component {
    componentDidMount() {
        console.log(1);
    }

    render() {
        const {weekItems} = this.props;

        return (
            <div className="weather__week">
                {weekItems.map(item =>
                    <WeekItem key={item.id} weekItem={item}/>
                )}
            </div>
        );
    }
}

export default WeekItems;