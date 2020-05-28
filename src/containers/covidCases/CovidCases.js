import React , { useState, useEffect} from 'react'; 
import { Grid } from '@material-ui/core';
import Chart from '../../components/CovidDisplay/Chart/chart/Chart'
import Search from '../../components/CovidDisplay/SearchCountry/SearchCountry'
import * as convid from '../../components/CovidDisplay/index'


const Covidcases = () => {
  
    const [country, setCountry] = useState('')
    const [data, setData] = useState({})
    //const [loading, setLoading] = useState(true)

     useEffect(() => {
          const fetchData= async() =>{
            const data = await convid.countryCases()
               setData(data)
          }
          fetchData();
    }, [])

    const handleChange = async(country)=>{
        console.log(country)
        const fetch = await convid.countryCases(country)
        setData(fetch)
        setCountry(country)
    }

    return (
      <React.Fragment>
        <div className="container">
         <Grid container spacing={9} justify="center">
            <convid.Covidrecoveries data={data}  />
             <convid.Covidinfections data={data}  />
             <convid.Coviddeaths data={data}  />  
            </Grid>
           </div>
           <Search handleChange={handleChange}  />
           <Chart data={data} country={country}/>
      </React.Fragment>
    );
}

export default Covidcases;
