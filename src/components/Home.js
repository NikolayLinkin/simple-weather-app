import React, {Component} from "react";
import PropTypes from "prop-types";

import WeekItems from "./WeekItems";

class Home extends Component {
    static propTypes = {
        weekItems: PropTypes.array,
    };

    componentDidMount() {
        const {fetchLocation} = this.props;

        fetchLocation('moscow');
    }

    render() {
        const {weekItems} = this.props;

        return (
            <div className="wrapper">
                <div className="tabs">
                    <span className="tabs__tab tabs__tab--active">
                        Today
                    </span>
                    <span className="tabs__tab">
                        Week
                    </span>
                </div>
                <WeekItems weekItems={weekItems}/>
            </div>
        );
    }
}

export default Home;