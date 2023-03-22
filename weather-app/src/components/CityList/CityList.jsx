import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from "convert-units";
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const { city, country } = cityAndCountry
  // const { temperature, state } = weather

  return (
        <ListItem
            button
            key={city} 
            onClick={eventOnClickCity} >
      <Grid container
        justifyContent='center'
	      alignItems="center"
        >
        <Grid item
                    md={9}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
           md={3}
          xs={12}>
            <Weather 
              temperature={weather && weather.temperature} 
              state={weather && weather.state} />
        </Grid>
      </Grid>
    </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const apiKey = '5ee62565b41efd89a6ef46933847542c'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
      axios
      .get(url)
      .then(response => {
        const { data } = response
        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main.toLowerCase()
        const propName = `${city}-${country}`
        const propValue = { temperature, state }

                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
      })
      .catch( error => {
        if(error.response){
          // const { data, status } = error.response
          setError("Ha ocurrido un error en el servidor de clima")
        }
        else if(error.request){
          setError("Verifique su conexión a internet")
        }
        else{
          setError("Error al cargar los datos")
        }
      })
    }

    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode)
    });

  }, [cities])
  

  // const weather = {temperature: 25, state: "sunny" }
  return (
      <div>
        {
          error && <Alert severity='"error' onClose={() => setError(null)}>{ error }</Alert>
        }
        <List>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
        }
        </List>
      </div>
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
      }).isRequired
    ),
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
