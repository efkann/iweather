import { useEffect, useRef, useState } from 'react';

type State = {
  loading: boolean;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
  error: GeolocationPositionError | null;
};

export default function useGeolocation(options = {}, startOnLoad = true) {
  const [state, setState] = useState<State>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: null,
    error: null,
  });

  const optionsRef = useRef(options);

  useEffect(() => {
    const onEvent: PositionCallback = ({ coords, timestamp }) => {
      setState({
        loading: false,
        timestamp,
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        error: null,
      });
    };

    const onEventError: PositionErrorCallback = (error) => {
      setState((s) => ({
        ...s,
        loading: false,
        error,
      }));
    };

    const startGeolocation = () => {
      navigator.geolocation.getCurrentPosition(onEvent, onEventError, optionsRef.current);
    };

    if (startOnLoad) {
      const cleanup = startGeolocation();
      return cleanup;
    }

    // Return a no-op cleanup function if geolocation shouldn't start automatically
    return () => {};
  }, [startOnLoad]);

  return state;
}
