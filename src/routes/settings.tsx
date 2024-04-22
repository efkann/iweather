import { GithubLogo, TwitterLogo } from '../components/icons/logo';
import { CaretRight } from '../components/icons/phosphor';
import Select, { SelectItem } from '../components/ui/select';
import { translations } from '../constants';
import useSettingsStore from '../hooks/store/useSettingsStore';

const languages = ['english', 'turkish'];
const unitsSystems = ['metric', 'imperial'];

function Settings() {
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);
  const unitsSystem = useSettingsStore((state) => state.unitsSystem);
  const setUnitsSystem = useSettingsStore((state) => state.setUnitsSystem);

  return (
    <div className="w-full px-2">
      <div className="bg-gray-600 rounded-2xl divide-y-2 divide-gray-800">
        <div className="flex justify-between items-center p-4 gap-2">
          <Select
            label={translations[language]['settings-language']}
            value={language}
            setValue={setLanguage}
          >
            {languages.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="![outline:none] flex gap-2 items-center scroll-m-2 cursor-default rounded p-2 aria-disabled:opacity-50 data-[active-item]:text-gray-100 data-[active-item]:bg-blue-600 capitalize"
              >
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center p-4 gap-2">
          <Select
            label={translations[language]['settings-units']}
            value={unitsSystem}
            setValue={setUnitsSystem}
          >
            {unitsSystems.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="![outline:none] flex gap-2 items-center scroll-m-2 cursor-default rounded p-2 aria-disabled:opacity-50 text-gray-100 data-[active-item]:text-gray-100 data-[active-item]:bg-blue-600 capitalize"
              >
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-4 flex flex-col rounded-2xl bg-gray-600 text-gray-100 divide-y-2 divide-gray-800">
        <a
          href="https://openweathermap.org/current"
          className="flex items-center justify-between px-2 group"
        >
          <div className="p-4">
            <p>{translations[language]['openweathermap-api']}</p>
            <span className="underline underline-offset-4">
              https://openweathermap.org/current
            </span>
          </div>
          <CaretRight
            aria-hidden
            className="flex-shrink-0 w-6 h-6 text-gray-100 transition-transform group-hover:-translate-x-1"
          />
        </a>
        <a
          href="https://github.com/efkann"
          className="flex items-center justify-between px-2 group"
        >
          <div className="p-4">
            <p>{translations[language]['github-repo']}</p>
            <span className="underline underline-offset-4">
              https://github.com/efkann
            </span>
          </div>
          <GithubLogo
            aria-hidden
            className="flex-shrink-0 w-[24.5px] h-[24px] transition-transform group-hover:-translate-x-1"
          />
        </a>
        <a
          href="https://twitter.com/mefkansec"
          className="flex items-center justify-between px-2 group"
        >
          <div className="p-4">
            <p>{translations[language]['twitter-contact']}</p>
            <span className="underline underline-offset-4">
              https://twitter.com/mefkansec
            </span>
          </div>
          <TwitterLogo
            aria-hidden
            className="flex-shrink-0 w-[24px] h-[24.54px] transition-transform group-hover:-translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

export default Settings;
