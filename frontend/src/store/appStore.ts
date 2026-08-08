import { create } from 'zustand';

interface AppState {
  currentRole: 'company' | 'talent' | 'admin';
  isAuthenticated: boolean;
  userName: string;
  companyName: string;
  setRole: (role: 'company' | 'talent' | 'admin') => void;
  setAuthenticated: (auth: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentRole: 'company',
  isAuthenticated: true,
  userName: 'João Silva',
  companyName: 'Indústria MetalTech Ltda.',
  setRole: (role) => set({ currentRole: role }),
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
}));
