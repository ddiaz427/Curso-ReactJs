import React from 'react'
import { useNavigate } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from '../utils/serviceCities'


const MainPage = () => {
  const history = useNavigate()
  const onClickHandler = (city, countryCode) => {
    history(`/city/${countryCode}/${city}`)
  }

  return (
        <AppFrame>
            <Paper elevation={3}>
            <CityList 
                cities={getCities()} 
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
  )
}

export default MainPage
