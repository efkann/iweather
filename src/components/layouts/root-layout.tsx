import { Link, Outlet } from 'react-router-dom';
import { AppLogo } from '../icons/logo';
import { Gear } from '../icons/phosphor';
import { translations } from '../../constants';
import useSettingsStore from '../../hooks/useSettingsStore';

function RootLayout() {
  const language = useSettingsStore((state) => state.language);
  return (
    <>
      <header className="py-4 px-4 grid items-center grid-cols-[1fr_auto_1fr]">
        <h1 className="flex items-center justify-center gap-2 col-end-3">
          <AppLogo aria-hidden className="opacity-80" />
          <span className="text-gray-100 text-opacity-80 text-xl font-bold">
            iWeather
          </span>
        </h1>
        <div className="w-6 h-6  ml-auto">
          <Link to="/settings">
            <Gear aria-hidden className="w-6 h-6 text-gray-200" />
            <span className="sr-only">{translations[language]['settings-header']}</span>
          </Link>
        </div>
      </header>
      <main className="text-white max-w-2xl px-2 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
