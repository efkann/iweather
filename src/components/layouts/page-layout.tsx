import { Link, Outlet } from 'react-router-dom';
import { CaretLeft } from '../icons/phosphor';
import { AppLogo } from '../icons/logo';
import { translations } from '../../constants';
import useSettingsStore from '../../hooks/useSettingsStore';

function PageLayout() {
  const language = useSettingsStore((state) => state.language);
  return (
    <>
      <header className="py-4 px-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <div className="w-6 h-6">
          <Link to="/">
            <CaretLeft aria-hidden className="w-6 h-6 text-gray-100" />
            <span className="sr-only">{translations[language]['go-back']}</span>
          </Link>
        </div>
        <h1 className="flex items-center justify-center gap-2">
          <AppLogo aria-hidden className="opacity-80" />
          <span className="text-gray-100 text-opacity-80 text-xl font-bold">
            iWeather
          </span>
        </h1>
      </header>
      <main className="text-white max-w-2xl px-2 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
