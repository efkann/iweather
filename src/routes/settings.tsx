import { GithubLogo, TwitterLogo } from '../components/icons/logo';
import { CaretRight } from '../components/icons/phosphor';
import Select, { SelectItem } from '../components/ui/select';

const items = ['English', 'Turkish', 'Spanish', 'French', 'German'];
const units = ['Metric', 'Imperial', 'Standard'];

function Settings() {
  return (
    <div className="w-full px-2">
      <div className="bg-gray-600 rounded-2xl divide-y-2 divide-gray-800">
        <div className="flex justify-between items-center p-4 gap-2">
          <Select label="Language">
            {items.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="![outline:none] flex gap-2 items-center scroll-m-2 cursor-default rounded p-2 aria-disabled:opacity-50 data-[active-item]:text-gray-100 data-[active-item]:bg-blue-600"
              >
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center p-4 gap-2">
          <Select label="Units">
            {units.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="![outline:none] flex gap-2 items-center scroll-m-2 cursor-default rounded p-2 aria-disabled:opacity-50 text-gray-100 data-[active-item]:text-gray-100 data-[active-item]:bg-blue-600"
              >
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex justify-between items-center p-4 gap-2">
          <Select label="Units">
            {units.map((item) => (
              <SelectItem
                key={item}
                value={item}
                className="![outline:none] flex gap-2 items-center scroll-m-2 cursor-default rounded p-2 aria-disabled:opacity-50 text-gray-100 data-[active-item]:text-gray-100 data-[active-item]:bg-blue-600"
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
            <p>
              This app uses OpenWeatherMap API to retrieve weather data. Explore the
              format and features of the API.
            </p>
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
            <p>
              This project is open source. Feel free to check out the source code on my
              Github repository.
            </p>
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
            <p>Have something to say? Even just to say hi, reach out to me on Twitter</p>
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
