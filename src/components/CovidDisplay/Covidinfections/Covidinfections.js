import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

export const Covidinfections = ({ data: { confirmed, lastUpdate } }) => {
    let covidInfection 
    if (!confirmed) {
        covidInfection = <h1>Loading ...</h1>
    }else{
        covidInfection = (
            <Grid item xs={12} md={12} component={Card} className="card infected" >
            {console.log(confirmed)}
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Infected
                </Typography>
                <Typography variant="h5" component="h2">
                  <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                  Number of active cases of COVID-19.
                </Typography>
              </CardContent>
            </Grid>
        )
    }

    return (
        <div>
            {covidInfection}
        </div>
    );
}

export default Covidinfections;
