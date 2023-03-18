import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
	{ hour: 18, state:"sunny", temperature:17, weekDay:"Lunes" },
	{ hour: 6, state:"cloud", temperature:18, weekDay:"Martes" },
	{ hour: 12, state:"fog", temperature:18, weekDay:"Miercoles" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Jueves" },
	{ hour: 18, state:"cloudy", temperature:19, weekDay:"Viernes" },
	{ hour: 14, state:"rain", temperature:17, weekDay:"Sábado" },
	{ hour: 14, state:"rain", temperature:17, weekDay:"Domingo" }, 
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)