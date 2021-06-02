import React, { useState, useEffect } from 'react';

import { MenuItem, FormControl, Select ,Card,CardContent } from '@material-ui/core'
import Cards from "./Cards"
import Map from "./Map"
import Table from "./Table"
import LineGraph from "./LineGraph"
import { sortData } from './util';
function Data() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("wordwide");
  const [countryInfo, setcountryInfo] = useState({});
  const [tableData,setTableData]=useState([])

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=>response.json())
    .then((data)=>{
      setcountryInfo(data);
    })

  },[])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          const sortedData = sortData(data)
          setTableData(sortedData)
          setCountries(countries);
        });
    };
    getCountriesData();

  }, [])


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)

    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;


    await fetch(url)
      .then((response) => response.json())
      .then((data) =>{
         setcountryInfo(data);

       })

  };


  return (
    <div className="app">
      <div className="app_lift">
        <div>
          <FormControl className="dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="wordwide">Wordwide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}

            </Select>

          </FormControl>
        </div>
        <div className="card_display">
          <Cards title="CoronaVirus cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <Cards title="recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <Cards title="deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        <Map />


      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live cases by country</h3>
          <Table countries={tableData}/>

          <h3>World wide new cases</h3>
          <LineGraph/>
        </CardContent>

      </Card>
    </div>

  )
}

export default Data
