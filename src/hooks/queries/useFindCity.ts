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

export default function useFindCity({ searchQuery }: { searchQuery: string }) {
  const language = useSettingsStore((state) => state.language);
  return useQuery({
    queryKey: ['findCity', searchQuery],
    queryFn: async () => {
      const response = await axiosInstance.get(`/find?q=${searchQuery}`);
      const data: FindCityResponse = response.data;
      if (data.list.length === 0) {
        throw new Error(translations[language]['error-no-cities-found']);
      }
      return data;
    },
    // OpenWeatherMap API sometimes returns cities with same id so we filter them out
    select: (data) => {
      return (
        data?.list
          .filter(
            (item, index, self) => self.findIndex((t) => t.id === item.id) === index
          )
          .map((item) => ({
            id: item.id,
            name: `${item.name}, ${item.sys.country}`,
          })) ?? []
      );
    },
    enabled: searchQuery.length >= 3, // Only run query if searchQuery is at least 3 characters long
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity, // Unlikely that the list of cities will change
  });
}
