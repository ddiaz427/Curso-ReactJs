import React from 'react';
import {  render } from "@testing-library/react";
import CityInfo from "./CityInfo";


test('CityInfo render', async () => {
    const city = "Ibagué";
    const country = "Colombia";

    const { findAllByRole } = render(<CityInfo city={city} country={country} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityAndCountryComponents = await findAllByRole("heading");

    expect(cityAndCountryComponents[0]).toHaveTextContent(city);
    expect(cityAndCountryComponents[1]).toHaveTextContent(country);


})