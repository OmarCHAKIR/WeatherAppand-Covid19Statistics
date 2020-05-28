import React from 'react';

import ChartBar from '../chartBar/chartBar'


const Chart = (props) => {


    return (
        <div className="containerChart">
      
       <ChartBar data={props.data} country={props.country} />
        </div>
    );
}

export default Chart;
