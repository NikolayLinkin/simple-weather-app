import React from "react";

const Tab = ({activeTab, name, onClickTab, children}) => {
    return (
        <span
            className={`${activeTab === name ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}`}
            onClick={() => {onClickTab(name)}}>
            {children}
        </span>
    );
};

export default Tab;