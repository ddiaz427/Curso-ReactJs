export const cities = [
    {city: 'Ibague', country: 'Colombia', countryCode: 'CO'}, 
    {city: 'Bogota', country: 'Colombia', countryCode: 'CO'}, 
    {city: 'Medellin', country: 'Colombia', countryCode: 'CO'}, 
    {city: 'Montevideo', country: 'Uruguay', countryCode: 'UY'}
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => cities.filter(c => c.countryCode === countryCode)[0].country