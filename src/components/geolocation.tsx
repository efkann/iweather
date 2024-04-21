import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFindCityByCoords from '../hooks/useFindCityByCoords';
import useGeolocation from '../hooks/useGeolocation';
import { NavigationArrow, PinArea } from './icons/phosphor';

export default function Geolocation() {
  const [geolocationStarted, setGeolocationStarted] = useState(false);
  const geolocation = useGeolocation({}, geolocationStarted);
  let error = null;
  if (geolocation.error) {
    const permissionError = geolocation.error?.message === 'User denied Geolocation';
    if (permissionError) {
      error = 'Denied permission, reset to use this feature.';
    } else {
      error = geolocation.error?.message;
    }
  }
  const hasCoordinates = geolocation.latitude !== null && geolocation.longitude !== null;
  const {
    data,
    isFetching,
    error: APIError,
  } = useFindCityByCoords({
    lat: geolocation.latitude,
    lon: geolocation.longitude,
  });

  if (APIError) {
    error = APIError.message;
  }

  const isLoading = (geolocationStarted && geolocation.loading) || isFetching;

  const handleStartGeolocation = () => {
    setGeolocationStarted(true);
  };

  if (error) {
    return (
      <div className="w-full">
        <p className="py-2 px-4 text-sm border border-transparent lg:text-base text-center text-red-400">
          {error}
        </p>
      </div>
    );
  }
  console.log({ geolocation });

  if (data) {
    return (
      <div className="w-full flex items-center">
        <Link
          to={`/weather/${data.id}`}
          className="mx-auto flex gap-2 items-center py-2 px-4 font-semibold text-blue-light border border-gray-500 rounded-md outline-2 outline-offset-2"
        >
          <PinArea aria-hidden className="h-5 w-5" />
          <span className="text-sm lg:text-base">
            {data.name}, {data.sys.country}
          </span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={handleStartGeolocation}
        disabled={isLoading}
        className="mx-auto flex gap-2 items-center py-2 px-4 text-blue-light border border-gray-500 rounded-md outline-2 outline-offset-2"
      >
        <NavigationArrow aria-hidden className="h-5 w-5 rotate-90" />
        <span className="text-sm lg:text-base">
          {!isLoading && !hasCoordinates ? 'Use my current location' : null}
          {isLoading ? 'Retrieving your location...' : null}
        </span>
      </button>
    </div>
  );
}
