import axios from 'axios';

const OPENWEATHERMAP_API_KEY = 'fdc6992d1be2e5d2322ea8ddafd29a57';

export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: OPENWEATHERMAP_API_KEY,
    units: 'metric',
    lang: 'en',
  },
});
