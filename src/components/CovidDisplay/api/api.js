import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const countryCases= async (country)=>{

    let urlVariable = url
  
    
    if (country) {
        urlVariable = `${url}/countries/${country}`
        console.log("fired")
    }
        
       try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(urlVariable);

            return { confirmed, recovered, deaths, lastUpdate };
       } catch (error) {
           console.log(error)
       }
}

export const fetchCountries=async()=>{
    try {
        const {data :{countries}} = await axios.get(`${url}/countries`)
        console.log("reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
         return countries.map((country) => country.name)

    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyDate = async ()=>{
    try {
         const {data} = await axios.get(`${url}/daily/`)
         return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        console.log(error)
    }
}

