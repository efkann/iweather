import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../lib/axios';
import useSettingsStore from '../store/useSettingsStore';
import { translations } from '../../constants';

type FindCityResponse = {
  list: Array<{
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    sys: {
      country: string;
    };
  }>;
  message: string;
};

export default function useFindCityByCoords({
  lat,
  lon,
}: {
  lat: number | null;
  lon: number | null;
}) {
  const language = useSettingsStore((state) => state.language);

  return useQuery({
    queryKey: ['findCityByCoords', lat, lon],
    queryFn: async () => {
      const response = await axiosInstance.get(`/find?lat=${lat}&lon=${lon}`);
      const data: FindCityResponse = response.data;

      if (data === undefined || data.list.length === 0) {
        throw new Error(translations[language]['error-no-cities-found']);
      }
      const city = data.list[0];
      return city;
    },
    enabled: lat !== null && lon !== null,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity,
  });
}
