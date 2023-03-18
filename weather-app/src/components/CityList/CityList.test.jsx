/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: 'Ibague', country: 'Colombia'}, 
    {city: 'Bogota', country: 'Colombia'}, 
    {city: 'Medellin', country: 'Colombia'}, 
    {city: 'Montevideo', country: 'Uruguay'}
]

test("CityList renders", async () => {

    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})