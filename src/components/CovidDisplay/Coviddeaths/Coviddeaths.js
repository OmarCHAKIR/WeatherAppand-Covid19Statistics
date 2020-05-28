import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';


export const Coviddeaths = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
    let covidDeaths 
    if (!deaths) {
        covidDeaths = <h1>Loading ...</h1>
    }else{
        covidDeaths = (
            <Grid item xs={12} md={12} component={Card} className="card deaths">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
              </Typography>
            </CardContent>
          </Grid>
        )
    }

    return (
        <div>
              {covidDeaths}
        </div>
    );
};




export default Coviddeaths;
