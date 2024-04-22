import { Link, Outlet } from 'react-router-dom';
import { CaretLeft } from '../icons/phosphor';
import useSettingsStore from '../../hooks/store/useSettingsStore';
import { translations } from '../../constants';

function SettingsLayout() {
  const language = useSettingsStore((state) => state.language);
  return (
    <>
      <header className="py-4 px-4 grid items-center grid-cols-[1fr_auto_1fr]">
        <div className="w-6 h-6">
          <Link to="/">
            <CaretLeft aria-hidden className="w-6 h-6 text-gray-100" />
            <span className="sr-only">{translations[language]['go-back']}</span>
          </Link>
        </div>
        <h1 className="flex items-center justify-center gap-2">
          <span className="text-gray-100 text-opacity-80 text-xl font-bold">
            {translations[language]['settings-header']}
          </span>
        </h1>
      </header>
      <main className="text-white max-w-2xl px-2 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default SettingsLayout;
