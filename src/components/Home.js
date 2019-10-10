import React, {Component} from "react";
import PropTypes from "prop-types";

import Tabs from "./Tabs";
import WeekItems from "./WeekItems";
import Today from "./Today";

class Home extends Component {
    static propTypes = {
        weekItems: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.state = {
            openTab: 'week'
        };

        this.onClickTab = this.onClickTab.bind(this);
    }

    componentDidMount() {
        const {fetchLocation} = this.props;

        fetchLocation('moscow');
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
            fetchTodayWeathers,
            woeid,
            activeTab,
            today,
        } = this.props;

        return (
            <div className="wrapper">
                <Tabs activeTab={activeTab} onClickTab={this.onClickTab}/>
                {activeTab === 'week' ?
                    <WeekItems woeid={woeid}
                               weekItems={weekItems}
                    />
                    : 'loading...'}
                {activeTab === 'today' && Object.keys(today).length ? <Today {...today}/>: ''}
            </div>
        );
    }
}

export default Home;