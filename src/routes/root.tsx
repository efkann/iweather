import { startTransition, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Geolocation from '../components/geolocation';
import { Spinner } from '../components/icons/phosphor';
import Combobox, { ComboboxItem } from '../components/ui/combobox';
import useFindCity from '../hooks/queries/useFindCity';
import { translations } from '../constants';
import useSettingsStore from '../hooks/store/useSettingsStore';

const WelcomeText = () => {
  const language = useSettingsStore((state) => state.language);

  if (language === 'english') {
    return (
      <>
        {language === 'english' && 'Welcome to'}{' '}
        <span className="text-blue-light">iWeather</span>
      </>
    );
  }
  return (
    <>
      <span className="text-blue-light">iWeather'a</span> hoşgeldin
    </>
  );
};

function Root() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>('');
  const { data: cities, isFetching, error } = useFindCity({ searchQuery: searchValue });

  const language = useSettingsStore((state) => state.language);

  return (
    <>
      <div className="flex flex-col gap-2 mt-48">
        <h2 className="text-heading-md text-gray-100 lg:text-2xl text-center font-bold">
          {<WelcomeText />}
        </h2>
        <p className="text-sm lg:text-lg text-center text-gray-200">
          {translations[language]['welcome-subheader']}
        </p>
        <Geolocation />
      </div>
      <div className="mt-2 w-full">
        <Combobox
          setValue={(value) => {
            startTransition(() => setSearchValue(value));
          }}
          setSelectedValue={(value) => {
            navigate(`/weather/${value}`);
          }}
          placeholder={translations[language]['search-placeholder']}
          loadingIcon={
            isFetching ? (
              <div
                aria-hidden
                className="absolute pointer-events-none w-full h-full top-0 bottom-0 right-0 left-0 flex items-center"
              >
                <Spinner className="w-8 h-8 text-blue-light ml-auto mr-5 animate-spin" />
              </div>
            ) : null
          }
        >
          {cities?.map((city) => (
            <ComboboxItem
              key={city.id}
              className="![outline:none] text-md text-gray-100 data-[active-item]:bg-blue-500/80 flex gap-2 px-5 py-4 scroll-m-2 cursor-default items-center border-gray-800 hover:bg-blue-400/40"
              value={city.id.toString()}
            >
              {city.name}
            </ComboboxItem>
          ))}
        </Combobox>
        {error ? (
          <p className="text-gray-300 italic mt-4 text-center text-sm lg:text-base">
            {error.message}
          </p>
        ) : null}
      </div>
    </>
  );
}

export default Root;
