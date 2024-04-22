import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { persist } from 'zustand/middleware';

interface SettingsState {
  language: 'english' | 'turkish';
  unitsSystem: 'metric' | 'imperial';
  setLanguage: (language: SettingsState['language']) => void;
  setUnitsSystem: (unitsSystem: SettingsState['unitsSystem']) => void;
}

export const useSettingsStore = create<SettingsState>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        language: 'english',
        unitsSystem: 'metric',
        setLanguage: (language) => set({ language }),
        setUnitsSystem: (unitsSystem) => set({ unitsSystem }),
      }),
      {
        name: 'settings-storage',
      }
    )
  )
);

export default useSettingsStore;
