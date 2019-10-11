import React from "react";
import Tab from "./Tab";

const Tabs = ({activeTab, onClickTab}) => {
    return (
        <div className="tabs">
            <Tab name="week" onClickTab={onClickTab} activeTab={activeTab}>
                Week
            </Tab>

            <Tab name="today" onClickTab={onClickTab} activeTab={activeTab}>
                Today
            </Tab>
        </div>
    );
};

export default Tabs;