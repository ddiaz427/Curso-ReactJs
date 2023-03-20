import React from 'react'
import CityInfo from './../CityInfo'
import { Grid, ListItem, List } from '@material-ui/core'
import PropTypes from 'prop-types'
import Weather from './../Weather'

const renderCityAndCountry = eventOnClickCity => cityAndCountry => {
  const { city, country } = cityAndCountry

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container
	      alignItems="center"
        >
        <Grid item
          md={8}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item
          md={4}
          xs={12}>
            <Weather temperature={25} state="sunny" />
        </Grid>
      </Grid>
    </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
  return (
        <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
        </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
