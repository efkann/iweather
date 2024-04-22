export type WeatherIconCode = keyof typeof weatherIconsMap;

export const weatherIconsMap = {
  '00d': 'clear_day',
  '01d': 'clear_day',
  '01n': 'clear_night',
  '02d': 'fewclouds_day',
  '02n': 'fewclouds_night',
  '03d': 'cloudy_day',
  '03n': 'cloudy_night',
  '04d': 'cloudy_day',
  '04n': 'cloudy_night',
  '09d': 'rain_day',
  '09n': 'rain_night',
  '10d': 'rain_day',
  '10n': 'rain_night',
  '11d': 'storm_day',
  '11n': 'storm_night',
  '13d': 'storm_day',
  '13n': 'storm_night',
  '50d': 'storm_day',
  '50n': 'storm_night',
} as const;

export const units = {
  metric: {
    temperature: '°c',
    windSpeed: 'km/h',
  },
  imperial: {
    temperature: '°F',
    windSpeed: 'mph',
  },
} as const;
