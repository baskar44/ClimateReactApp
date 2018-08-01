import axios from 'axios'

const API_KEY = 'fb7f57264840bce29b5c10007b6a5133'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}