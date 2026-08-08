import { create } from 'zustand';
import type { Demand, BlindProfile, InputMethod, PipelineStage } from '../types';
import { mockDemands, mockBlindProfiles, mockPipelineCards } from '../data';
import type { PipelineCard } from '../types';

interface CompanyState {
  // Demands
  demands: Demand[];
  currentDemand: Partial<Demand> | null;
  inputMethod: InputMethod | null;
  rawInput: string;

  // Demand creation flow
  setInputMethod: (method: InputMethod) => void;
  setRawInput: (input: string) => void;
  setCurrentDemand: (demand: Partial<Demand>) => void;
  updateCurrentDemand: (updates: Partial<Demand>) => void;
  resetDemandFlow: () => void;

  // WHO Board
  blindProfiles: BlindProfile[];
  selectedProfileIds: string[];
  sortBy: string;
  filterSkill: string;

  toggleProfileSelection: (id: string) => void;
  clearSelection: () => void;
  setSortBy: (sort: string) => void;
  setFilterSkill: (skill: string) => void;
  revealProfile: (id: string) => void;
  toggleSaveProfile: (id: string) => void;

  // Pipeline
  pipelineCards: PipelineCard[];
  movePipelineCard: (cardId: string, newStage: PipelineStage) => void;
}

export const useCompanyStore = create<CompanyState>((set) => ({
  // Demands
  demands: mockDemands,
  currentDemand: null,
  inputMethod: null,
  rawInput: '',

  setInputMethod: (method) => set({ inputMethod: method }),
  setRawInput: (input) => set({ rawInput: input }),
  setCurrentDemand: (demand) => set({ currentDemand: demand }),
  updateCurrentDemand: (updates) =>
    set((state) => ({
      currentDemand: { ...state.currentDemand, ...updates },
    })),
  resetDemandFlow: () =>
    set({
      currentDemand: null,
      inputMethod: null,
      rawInput: '',
    }),

  // WHO Board
  blindProfiles: mockBlindProfiles,
  selectedProfileIds: [],
  sortBy: 'matchScore',
  filterSkill: '',

  toggleProfileSelection: (id) =>
    set((state) => {
      const isSelected = state.selectedProfileIds.includes(id);
      if (isSelected) {
        return {
          selectedProfileIds: state.selectedProfileIds.filter((pid) => pid !== id),
        };
      }
      if (state.selectedProfileIds.length >= 3) return state;
      return {
        selectedProfileIds: [...state.selectedProfileIds, id],
      };
    }),
  clearSelection: () => set({ selectedProfileIds: [] }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setFilterSkill: (skill) => set({ filterSkill: skill }),
  revealProfile: (id) =>
    set((state) => ({
      blindProfiles: state.blindProfiles.map((p) =>
        p.id === id ? { ...p, isRevealed: true } : p
      ),
    })),
  toggleSaveProfile: (id) =>
    set((state) => ({
      blindProfiles: state.blindProfiles.map((p) =>
        p.id === id ? { ...p, isSaved: !p.isSaved } : p
      ),
    })),

  // Pipeline
  pipelineCards: mockPipelineCards,
  movePipelineCard: (cardId, newStage) =>
    set((state) => ({
      pipelineCards: state.pipelineCards.map((card) =>
        card.id === cardId ? { ...card, stage: newStage } : card
      ),
    })),
}));
