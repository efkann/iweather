import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../lib/axios';
import { WeatherIconCode } from '../constants';
import { getLocaleWeekday } from '../utils';
import useSettingsStore from './useSettingsStore';

type ForecastData = Array<{
  name: string;
  time: string | undefined;
  icon: WeatherIconCode;
  max: number;
  min: number;
}>;

type ForecastResponse = {
  list: Array<{
    dt_txt: string;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: WeatherIconCode;
    }>;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
  }>;
};

// OpenWeatherMap not providing daily min max temp, we need to consider every 3 hours period to get them.
function getCalculatedMinMax(forecastData: ForecastData) {
  const data = forecastData.reduce((acc, item) => {
    const { name, time, icon, max, min } = item;
    if (!acc[name]) {
      acc[name] = { name, time, icon, max, min };
    }
    if (time === '12:00:00') {
      // Use noon time as a reference to get the most accurate icon
      acc[name]!.icon = icon;
    }
    if (acc[name]!.min > min) {
      acc[name]!.min = min;
    }
    if (acc[name]!.max < max) {
      acc[name]!.max = max;
    }
    return acc;
  }, {} as Record<string, ForecastData[number]>);
  return Object.values(data);
}

export default function useForecastById({ id }: { id: string }) {
  const language = useSettingsStore((state) => state.language);
  const unitsSystem = useSettingsStore((state) => state.unitsSystem);
  const locale = language === 'english' ? 'en-US' : 'tr-TR';

  return useQuery({
    queryKey: ['forecast', id, unitsSystem],
    queryFn: async () => {
      const response = await axiosInstance.get(`/forecast?id=${id}`);
      const data: ForecastResponse = response.data;
      return data;
    },
    select: (data) => {
      const allData = data.list.map((item) => ({
        name: getLocaleWeekday(locale, new Date(item.dt_txt).getTime()),
        time: item.dt_txt.split(' ')[1], // Get only time
        icon: item?.weather?.[0] ? item.weather[0].icon : '00d',
        max: Math.floor(item.main.temp_max),
        min: Math.floor(item.main.temp_min),
      }));
      const days = getCalculatedMinMax(allData);
      return days.slice(-5); // 5 days forecast
    },
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 60 * 1000 * 10, // 10 minutes
  });
}
