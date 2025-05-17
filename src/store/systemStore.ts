import { create } from 'zustand';

interface SystemState {
  // System State
  isBooting: boolean;
  isLoggedIn: boolean;
  systemTime: Date;
  isStartMenuOpen: boolean;
  volume: number;
  theme: 'classic' | 'modern' | 'custom';
  wallpaper: string;
  
  // Windows Management
  activeWindows: Window[];
  focusedWindowId: string | null;
  minimizedWindows: string[];
  
  // Programs
  installedPrograms: Program[];
  
  // Actions
  boot: () => void;
  login: () => void;
  logout: () => void;
  toggleStartMenu: () => void;
  openWindow: (program: Program) => void;
  closeWindow: (windowId: string) => void;
  minimizeWindow: (windowId: string) => void;
  restoreWindow: (windowId: string) => void;
  setFocusedWindow: (windowId: string) => void;
}

interface Window {
  id: string;
  programId: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface Program {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
  defaultSize?: { width: number; height: number };
  defaultPosition?: { x: number; y: number };
  allowResize?: boolean;
  singleton?: boolean;
  requiredAchievements?: string[];
}

export const useSystemStore = create<SystemState>((set, get) => ({
  // Initial State
  isBooting: true,
  isLoggedIn: false,
  systemTime: new Date(),
  isStartMenuOpen: false,
  volume: 0.5,
  theme: 'classic',
  wallpaper: '/assets/wallpapers/default.jpg',
  activeWindows: [],
  focusedWindowId: null,
  minimizedWindows: [],
  installedPrograms: [],

  // System Actions
  boot: () => {
    set({ isBooting: true });
    setTimeout(() => set({ isBooting: false }), 3000);
  },

  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
  toggleStartMenu: () => set(state => ({ isStartMenuOpen: !state.isStartMenuOpen })),

  // Window Management
  openWindow: (program) => {
    const newWindow: Window = {
      id: crypto.randomUUID(),
      programId: program.id,
      title: program.name,
      icon: program.icon,
      isMinimized: false,
      position: program.defaultPosition || { x: 50, y: 50 },
      size: program.defaultSize || { width: 800, height: 600 },
      zIndex: get().activeWindows.length + 1
    };

    set(state => ({
      activeWindows: [...state.activeWindows, newWindow],
      focusedWindowId: newWindow.id
    }));
  },

  closeWindow: (windowId) =>
    set(state => ({
      activeWindows: state.activeWindows.filter(w => w.id !== windowId),
      focusedWindowId: state.focusedWindowId === windowId ? null : state.focusedWindowId
    })),

  minimizeWindow: (windowId) =>
    set(state => ({
      activeWindows: state.activeWindows.map(w =>
        w.id === windowId ? { ...w, isMinimized: true } : w
      ),
      minimizedWindows: [...state.minimizedWindows, windowId],
      focusedWindowId: state.focusedWindowId === windowId ? null : state.focusedWindowId
    })),

  restoreWindow: (windowId) =>
    set(state => ({
      activeWindows: state.activeWindows.map(w =>
        w.id === windowId ? { ...w, isMinimized: false } : w
      ),
      minimizedWindows: state.minimizedWindows.filter(id => id !== windowId),
      focusedWindowId: windowId
    })),

  setFocusedWindow: (windowId) =>
    set(state => ({
      focusedWindowId: windowId,
      activeWindows: state.activeWindows.map(w => ({
        ...w,
        zIndex: w.id === windowId ? state.activeWindows.length + 1 : w.zIndex
      }))
    }))
})); 