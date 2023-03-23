import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiFog,
    WiThunderstorm} from 'react-icons/wi'

export const validValues = [
        "clouds",
        "clear",
        "rain",
        "snow",
        "drizzle",
        "fog",
        "thunderstorm",
        "mist",
        "haze"
    ]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    fog: WiFog,
    thunderstorm: WiThunderstorm,
    mist: WiFog,
    haze: WiFog
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
