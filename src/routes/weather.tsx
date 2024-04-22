import { useParams } from 'react-router-dom';
import {
  Drop,
  RainCloud,
  Spinner,
  Sun,
  Thermometer,
  Wind,
} from '../components/icons/phosphor';
import useWeatherById from '../hooks/useWeatherById';
import useForecastById from '../hooks/useForecastById';
import { translations, units, weatherIconsMap } from '../constants';
import { getLocaleDateString } from '../utils';
import useSettingsStore from '../hooks/useSettingsStore';

function Weather() {
  const { cityId } = useParams();
  if (!cityId) {
    throw new Error('City id is required');
  }

  const language = useSettingsStore((state) => state.language);
  const unitsSystem = useSettingsStore((state) => state.unitsSystem);
  const locale = language === 'english' ? 'en-US' : 'tr-TR';

  const { data } = useWeatherById({ id: cityId });
  const { data: forecastData } = useForecastById({ id: cityId });

  if (!data || !forecastData) {
    return (
      <div className="mt-48 flex items-center justify-center">
        <Spinner className="w-8 h-8 text-gray-300 animate-spin" />
      </div>
    );
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
                {data.name}
              </h1>
              <time className="text-xs lg:text-heading-md text-gray-100">
                {getLocaleDateString(locale, data.dt * 1000)}
              </time>
            </div>
            <div className="flex items-end justify-between mt-24">
              <div className="flex flex-col">
                <span className="text-heading-xl font-extrabold">
                  {Math.round(data.main.temp)}
                  {units[unitsSystem].temperature}
                </span>
                <span className="text-heading-sm font-bold mt-2">
                  {`${Math.floor(data.main.temp_min)}${
                    units[unitsSystem].temperature
                  } / ${Math.floor(data.main.temp_max)}${units[unitsSystem].temperature}`}
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
            <dt className="text-heading-xs text-gray-200">
              {translations[language]['weather-thermal-sensation']}
            </dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {Math.round(data.main.feels_like)}
              {units[unitsSystem].temperature}
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <RainCloud aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">
              {translations[language]['weather-probability-of-rain']}
            </dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">0%</dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Wind aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">
              {translations[language]['weather-wind-speed']}
            </dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {`${data.wind.speed} ${units[unitsSystem].windSpeed}`}
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Drop aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">
              {translations[language]['weather-air-humidity']}
            </dt>
            <dd className="text-gray-100 ml-auto text-heading-sm">
              {data.main.humidity}%
            </dd>
          </div>
          <div className="flex items-center gap-3 py-4">
            <Sun aria-hidden className="text-gray-500 w-6 h-6" />
            <dt className="text-heading-xs text-gray-200">
              {translations[language]['weather-uv-index']}
            </dt>
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
                  {day.max}
                  {units[unitsSystem].temperature}
                </span>
                <span className="text-heading-xs font-bold text-gray-400">
                  {day.min}
                  {units[unitsSystem].temperature}
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
