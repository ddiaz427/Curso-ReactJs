import React, { useState, useEffect } from 'react'
import axios from "axios";
import convertUnits from "convert-units";
import Grid from '@material-ui/core/Grid'
import moment from "moment";
import 'moment/locale/es'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import { useParams } from "react-router-dom";
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const CityPage = () => {
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    const { city, countryCode } = useParams()

    useEffect(() => {

        const getForecast = async () => {
            const apiKey = '5ee62565b41efd89a6ef46933847542c'
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
            try {
                const { data } = await axios.get(url)

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(d => moment().add(d, 'd'))
                const toCelsius = (temp) => convertUnits(temp).from('K').to('C').toFixed(0)
                const dataAux = days.map(day => {
                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()

                    })
                    const temps = tempObjArray.map(item => item.main.temp)
                    

                    return ({
                        dayHour: day.format('ddd'),
                        min: Number(toCelsius(Math.min(...temps))),
                        max: Number(toCelsius(Math.max(...temps)))
                    })
                })

                setData(dataAux);

                const interval = [4, 8, 12, 16, 20, 24]
                const forecastItemListAux = data.list
                .filter((item, index) => interval.includes(index))
                .map(item => {
                    return ({
                        hour: moment.unix(item.dt).hour(),
                        weekDay: moment.unix(item.dt).format('dddd'),
                        state: item.weather[0].main.toLowerCase(),
                        temperature: Number(toCelsius(item.main.temp))
                    })
                })
                setForecastItemList(forecastItemListAux);

            } catch (error) {
                console.log(error);
            }
        }
        getForecast()
    }, [city,countryCode])
    

    const country = "Colombia"
    const state = "clouds"
    const temperature = 20
    const humidity = 80
    const wind = 5
  return (
        <AppFrame>
        <Grid container
            justifyContent="space-around"
            direction="column"
            spacing={2}>
            <Grid item container 
                xs={12} 
                justifyContent="center"
                alignItems="flex-end">
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid container item xs={12}
                justifyContent="center">
                <Weather state={state} temperature={temperature} />
                <WeatherDetails humidity={humidity} 
                    wind={wind} />
            </Grid>
            <Grid item>
                {
                    data && <ForecastChart data={data} />
                }
            </Grid>
            <Grid item>
                {
                    forecastItemList && <Forecast forecastItemList={forecastItemList} />
                }
            </Grid>
        </Grid>
        </AppFrame>
  )
}


export default CityPage
