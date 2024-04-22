import axios from 'axios';
import useSettingsStore from '../hooks/store/useSettingsStore';

// Normally, you would want to keep this key secret, but this is a client-side application.

const OPENWEATHERMAP_API_KEY = 'fdc6992d1be2e5d2322ea8ddafd29a57';

export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: OPENWEATHERMAP_API_KEY,
    units: useSettingsStore.getState().unitsSystem,
    lang: useSettingsStore.getState().language === 'english' ? 'en' : 'tr',
  },
});

useSettingsStore.subscribe(
  (state) => [state.language, state.unitsSystem],
  (state) => {
    const [language, unitsSystem] = state;
    axiosInstance.defaults.params.lang = language === 'english' ? 'en' : 'tr';
    axiosInstance.defaults.params.units = unitsSystem;
  }
);
