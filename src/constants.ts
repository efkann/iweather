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

export const translations = {
  english: {
    'welcome-header': 'Welcome to iWeather',
    'welcome-subheader': 'Choose a location to see the weather forecast',
    'search-placeholder': 'Search location',
    'current-location': 'Use my current location',
    'current-location-loading': 'Retrieving your location...',
    'weather-thermal-sensation': 'Thermal sensation',
    'weather-probability-of-rain': 'Probability of rain',
    'weather-wind-speed': 'Wind speed',
    'weather-air-humidity': 'Air humidity',
    'weather-uv-index': 'UV Index',
    'error-message': 'Sorry, something unexpected happened.',
    'error-go-back': 'Go back to home page',
    'error-geolocation-denied': 'Denied permission, reset to use this feature.',
    'error-no-cities-found': 'No cities found for your search.',
    'openweathermap-api':
      'This app uses OpenWeatherMap API to retrieve weather data. Explore the format and features of the API.',
    'github-repo':
      'This project is open source. Feel free to check out the source code on my Github repository.',
    'twitter-contact':
      'Have something to say? Even just to say hi, reach out to me on Twitter',
    'settings-header': 'Settings',
    'settings-language': 'Language',
    'settings-units': 'Units',
    'go-back': 'Go back',
  },
  turkish: {
    'welcome-header': "iWeather'a hoşgeldin",
    'welcome-subheader': 'Hava durumu tahminini görmek için bir konum seç',
    'search-placeholder': 'Konum ara',
    'current-location': 'Güncel konumumu kullan',
    'current-location-loading': 'Konumunuz alınıyor...',
    'weather-thermal-sensation': 'Hissedilen sıcaklık',
    'weather-probability-of-rain': 'Yağmur olasılığı',
    'weather-wind-speed': 'Rüzgar hızı',
    'weather-air-humidity': 'Hava nem oranı',
    'weather-uv-index': 'UV İndeksi',
    'error-message': 'Üzgünüz, beklenmeyen bir hata oluştu.',
    'error-go-back': 'Ana sayfaya dön',
    'error-geolocation-denied': 'İzin reddildi, bu özelliği kullanmak için izni sıfırla.',
    'error-no-cities-found': 'Arama kriterlerine uygun şehir bulunamadı.',
    'openweathermap-api':
      "Bu uygulama, hava durumu verilerini almak için OpenWeatherMap API kullanmaktadır. API'nın formatını ve özelliklerini keşfet.",
    'github-repo':
      'Bu proje açık kaynaklıdır. Kaynak kodu Github repomdan kontrol etmekten çekinmeyin.',
    'twitter-contact':
      "Konuşmak istediğin bir şeyler mi var ? Sadece merhaba demek için bile Twitter'da benimle iletişime geçebilirsin",
    'settings-header': 'Ayarlar',
    'settings-language': 'Dil',
    'settings-units': 'Birimler',
    'go-back': 'Geri dön',
  },
} as const;
