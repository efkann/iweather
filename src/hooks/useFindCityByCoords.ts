import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../lib/axios';

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
  return useQuery({
    queryKey: ['findCityByCoords', lat, lon],
    queryFn: async () => {
      const response = await axiosInstance.get(`/find?lat=${lat}&lon=${lon}`);
      const data: FindCityResponse = response.data;

      if (data === undefined || data.list.length === 0) {
        throw new Error('No cities found for your search.');
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
