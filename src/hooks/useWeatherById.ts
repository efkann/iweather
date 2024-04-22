import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../lib/axios';
import { WeatherIconCode } from '../constants';
import useSettingsStore from './useSettingsStore';

type WeatherResponse = {
  name: string;
  dt: number;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: WeatherIconCode;
  }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
};

export default function useWeatherById({ id }: { id: string }) {
  // Weather description depends on the language so we need to include it in the query key
  const language = useSettingsStore((state) => state.language);
  return useQuery({
    queryKey: ['weather', id, language],
    queryFn: async () => {
      const response = await axiosInstance.get(`/weather?id=${id}`);
      const data: WeatherResponse = response.data;
      return data;
    },
    select: (data) => {
      return {
        name: `${data.name}, ${data.sys.country}`,
        dt: data.dt,
        wind: data.wind,
        weather: data.weather[0]!,
        main: data.main,
      };
    },
    throwOnError: true,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 60 * 1000 * 10, // 10 minutes
  });
}
