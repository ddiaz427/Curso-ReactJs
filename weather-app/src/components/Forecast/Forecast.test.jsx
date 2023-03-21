/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
	{ hour: 11, state:"clear", temperature:17, weekDay:"Lunes" },
	{ hour: 6, state:"clouds", temperature:18, weekDay:"Martes" },
	{ hour: 12, state:"clear", temperature:18, weekDay:"Miercoles" },
	{ hour: 10, state:"clear", temperature:19, weekDay:"Jueves" },
	{ hour: 13, state:"clear", temperature:19, weekDay:"Viernes" },
	{ hour: 16, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 14, state:"rain", temperature:17, weekDay:"Domingo" }, 
]

test('Forecast render', async () => {

    const { findAllByTestId } = render(
            <Forecast 
                forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(7)
})