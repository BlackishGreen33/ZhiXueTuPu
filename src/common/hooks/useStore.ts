import { create } from 'zustand';

interface State {
  screenSize: undefined | number;
  currentColor: string;
  themeSettings: boolean;
  activeMenu: boolean;
  isClicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  };
  isVisible: boolean;
  userType: 'admin' | 'student' | 'teacher';
  isViewer: boolean;
  setScreenSize: (size: undefined | number) => void;
  setCurrentColor: (color: string) => void;
  setActiveMenu: (active: boolean) => void;
  setIsClicked: (clicked: {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
  }) => void;
  setThemeSettings: (settings: boolean) => void;
  handleClick: (clicked: keyof State['isClicked']) => void;
  setIsVisible: (isVisible: boolean) => void;
  setUserType: (userType: 'admin' | 'student' | 'teacher') => void;
  setIsViewer: (isViewer: boolean) => void;
}

export const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const useStore = create<State>((set) => ({
  screenSize: undefined,
  currentColor: '#03C9D7',
  themeSettings: false,
  activeMenu: true,
  isClicked: initialState,
  isVisible: false,
  userType: 'admin',
  isViewer: false,

  setScreenSize: (size) => set({ screenSize: size }),
  setCurrentColor: (color) => {
    set({ currentColor: color });
    localStorage.setItem('colorMode', color);
  },
  setActiveMenu: (active) => set({ activeMenu: active }),
  setIsClicked: (clicked) => {
    set({ isClicked: clicked });
  },
  setThemeSettings: (settings) => set({ themeSettings: settings }),
  handleClick: (clicked) => {
    set((state) => ({
      isClicked: {
        ...state.isClicked,
        [clicked]: !state.isClicked[clicked],
      },
    }));
  },
  setIsVisible: (isVisible) => set({ isVisible: isVisible }),
  setUserType: (userType) => set({ userType: userType }),
  setIsViewer: (isViewer) => set({ isViewer: isViewer }),
}));

export default useStore;
