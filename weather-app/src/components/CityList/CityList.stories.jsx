import React from 'react'
import CityList from './CityList'
import { action } from "@storybook/addon-actions";

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: 'Ibague', country: 'Colombia'}, 
    {city: 'Bogota', country: 'Colombia'}, 
    {city: 'Medellin', country: 'Colombia'}, 
    {city: 'Montevideo', country: 'Uruguay'}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />