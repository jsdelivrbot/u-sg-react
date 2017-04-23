import axios from 'axios';

const API_KEY = 'a351582c9aef4a6936ad1c3778a3607d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},arg`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}