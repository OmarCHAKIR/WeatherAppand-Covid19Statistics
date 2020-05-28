import React from 'react';

export const CityLocation = (props) => {
   
    return (
        <div className="location">
        {props.cityLocation},
         {props.citySys }
         </div>
    );
}

export default CityLocation;
