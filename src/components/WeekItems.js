import React from "react";
import WeekItem from "./WeekItem";

const WeekItems = ({weekItems}) => {
    return (
        <div className="weather__week">
            {weekItems.map(item =>
                <WeekItem key={item.id} weekItem={item}/>
            )}
        </div>
    );
};

export default WeekItems;