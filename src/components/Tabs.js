import React from "react";
import Tab from "./Tab";

const Tabs = ({activeTab, onClickTab}) => {
    return (
        <div className="tabs">
            <Tab name="today" onClickTab={onClickTab} activeTab={activeTab}/>
            <Tab name="week" onClickTab={onClickTab} activeTab={activeTab}/>
        </div>
    );
};

export default Tabs;