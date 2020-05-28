import React , {useEffect , useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import * as covid from '../../CovidDisplay/index'

const SearchCountry = (props) => {

const [countries, setCountries] = useState([])

    useEffect(() => {
       const fetchCounties = async ()=>{
           setCountries(await covid.fetchCountries())
       }
       fetchCounties()
    }, [setCountries])
    return (
        <FormControl className="formControl" >
        <NativeSelect defaultValue="" onChange={(e) => props.handleChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    );
}

export default SearchCountry;
