import { useParams } from 'react-router-dom';
import { Drop, RainCloud, Sun, Thermometer, Wind } from '../components/icons/phosphor';
import useWeatherById from '../hooks/useWeatherById';
import useForecastById from '../hooks/useForecastById';
import { weatherIconsMap } from '../constants';
import { getLocaleDateString } from '../utils';

function Weather() {
  const { cityId } = useParams();

  if (!cityId) {
    throw new Error('City id is required');
  }

  const { data } = useWeatherById({ id: cityId });
  const { data: forecastData } = useForecastById({ id: cityId });
  if (!data || !forecastData) {
    return null;
  }

  const weatherIcon = weatherIconsMap[data.weather.icon];

  return (
    <div className="grid gap-2">
      <div className="bg-gray-800 rounded-[12px] w-full max-w-4xl p-3 flex">
        <div
          style={{
            backgroundImage: `url(/background/${weatherIcon}.png)`,
          }}
          className="bg-cover w-full rounded-lg"
        >
          <div className="p-5">
            <div>
              <h1 className="text-heading-sm lg:text-heading-lg font-bold text-gray-100">
                {data?.name}
              </h1>
              <time className="text-xs lg:text-heading-md text-gray-100">
                {getLocaleDateString('en-US', data.dt * 1000)}
              </time>
            </div>
            <div className="flex items-end justify-between mt-24">
              <div className="flex flex-col">
                <span className="text-heading-xl font-extrabold">
                  {Math.round(data.main.temp)}ºc
                </span>
                <span className="text-heading-sm font-bold mt-2">
                  {Math.floor(data.main.temp_min)}ºc / {Math.floor(data.main.temp_max)}ºc
                </span>
                <span className="text-sm first-letter:capitalize">
                  {data.weather?.description}
                </span>
              </div>
              <img
                src={`/icons/${weatherIcon}.svg`}
                aria-hidden
                className="w-40 h-40 -m-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded-[12px] w-full max-w-4xl px-4 flex">
        <dl className="w-full divide-y divide-gray-700">
          <div className="flex items-center gap-3 py-4">
            <Thermometer aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">Thermal sensation</dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {Math.round(data.main.feels_like)}ºc
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <RainCloud aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">Probability of rain</dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">0%</dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Wind aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">Wind speed</dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {data.wind.speed} km/h
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Drop aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">Air humidity</dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {data.main.humidity}%
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Sun aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">UV Index</dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">5</dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-800 rounded-[12px] w-full max-w-4xl px-4 flex">
        <div className="py-3 w-full flex justify-between overflow-x-auto">
          {forecastData.map((day, ind) => (
            <div
              key={day.name}
              className="flex flex-col gap-1 items-center flex-shrink-0 py-[14px] animate-fade-in-from-top"
              style={{
                animationFillMode: 'both',
                animationDelay: `${ind * 100}ms`,
              }}
            >
              <span className="text-heading-xs text-gray-200 font-bold">{day.name}</span>
              <img
                src={`/icons/${weatherIconsMap[day.icon]}.svg`}
                aria-hidden
                className="w-14 h-14"
              />
              <div className="flex flex-col items-center">
                <span className="text-heading-xs font-bold text-gray-100">
                  {day.max}ºc
                </span>
                <span className="text-heading-xs font-bold text-gray-400">
                  {day.min}ºc
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
