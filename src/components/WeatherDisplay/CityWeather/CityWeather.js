import React from 'react';

export const CityWeather = (props) => {
    return (
        <React.Fragment>
            <div className="temp">
              {Math.round(props.cityTemp-273)}°c
            </div>
            <div className="weather">{props.cityTempStatus}</div>
        </React.Fragment>
    );
}

export default CityWeather;
