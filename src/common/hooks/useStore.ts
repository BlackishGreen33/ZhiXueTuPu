import { create } from 'zustand';

interface State {
  screenSize: undefined | number;
  currentColor: string;
  currentMode: 'Light' | 'Dark';
  themeSettings: boolean;
  activeMenu: boolean;
  isClicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  };
  setScreenSize: (size: undefined | number) => void;
  setCurrentColor: (color: string) => void;
  setCurrentMode: (mode: 'Light' | 'Dark') => void;
  setActiveMenu: (active: boolean) => void;
  setIsClicked: (clicked: keyof State['isClicked']) => void;
  setThemeSettings: (settings: boolean) => void;
}

const useStore = create<State>((set) => ({
  screenSize: undefined,
  currentColor: '#03C9D7',
  currentMode: 'Light',
  themeSettings: false,
  activeMenu: true,
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },

  setScreenSize: (size) => set({ screenSize: size }),
  setCurrentColor: (color) => {
    set({ currentColor: color });
    localStorage.setItem('colorMode', color);
  },
  setCurrentMode: (mode) => {
    set({ currentMode: mode });
    localStorage.setItem('themeMode', mode);
  },
  setActiveMenu: (active) => set({ activeMenu: active }),
  setIsClicked: (clicked) => {
    set((state) => ({
      isClicked: {
        ...state.isClicked,
        [clicked]: !state.isClicked[clicked],
      },
    }));
  },
  setThemeSettings: (settings) => set({ themeSettings: settings }),
}));

export default useStore;