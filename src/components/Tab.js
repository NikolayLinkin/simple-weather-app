import React from "react";

const Tab = ({activeTab, name, onClickTab}) => {
    return (
        <span
            className={`${activeTab === name ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}`}
            onClick={() => {onClickTab(name)}}>
            {name}
        </span>
    );
};

export default Tab;