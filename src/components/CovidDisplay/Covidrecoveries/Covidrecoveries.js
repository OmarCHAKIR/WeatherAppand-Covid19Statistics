import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

export const Covidrecoveries = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    let Covidrecoveries 
    if (!recovered) {
        Covidrecoveries = <h1>Loading ...</h1>
    }else{
        Covidrecoveries = (
            
            <Grid item xs={12} md={12} component={Card} className="card recovered">
            
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of recoveries from COVID-19.
              </Typography>
            </CardContent>
          </Grid>
        )
    }

    return (
        <div>
              {Covidrecoveries}
        </div>
    );
}

export default Covidrecoveries;
