/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing (objeto del testeo)

test("CityInfo render", async () => {
    const city = "Buenos Aires"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    const cityAndCountryComponents = await findAllByRole("heading")


    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})