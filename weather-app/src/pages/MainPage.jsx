import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

  const cities = [
      {city: 'Ibague', country: 'Colombia'}, 
      {city: 'Bogota', country: 'Colombia'}, 
      {city: 'Medellin', country: 'Colombia'}, 
      {city: 'Montevideo', country: 'Uruguay'}
  ]

const MainPage = () => {
    const history = useHistory()
  const onClickHandler = () => {
    history.push("/city")
  }

  return (
    <div>
            <h2>Lista de ciudades</h2>
            <CityList 
                cities={cities} 
                onClickCity={onClickHandler} />
    </div>
  )
}

export default MainPage
