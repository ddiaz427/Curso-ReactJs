import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

  const cities = [
      {city: 'Ibague', country: 'Colombia', countryCode: 'CO'}, 
      {city: 'Bogota', country: 'Colombia', countryCode: 'CO'}, 
      {city: 'Medellin', country: 'Colombia', countryCode: 'CO'}, 
      {city: 'Montevideo', country: 'Uruguay', countryCode: 'UY'}
  ]

const MainPage = () => {
  const history = useNavigate()
  const onClickHandler = () => {
    history("/city")
  }

  return (
        <AppFrame>
            <Paper elevation={3}>
            <CityList 
                cities={cities} 
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
  )
}

export default MainPage
