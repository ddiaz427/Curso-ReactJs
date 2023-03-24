
import { validValues } from "../../components/IconState"
import { getCityCode, toCelsius } from "../../utils/utils"

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
    const temperature = toCelsius(data.main.temp)
    const stateFromServer = data.weather[0].main.toLowerCase()
    const humidity = data.main.humidity
    const wind = data.wind.speed

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode)
    const propValue = { temperature, state, humidity, wind }
    return ({ [propName]: propValue })
}

export default getAllWeather