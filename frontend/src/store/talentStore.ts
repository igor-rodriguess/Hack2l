import { create } from 'zustand';
import type { Talent, Video, Invite, Skill, AnalysisResult, VideoData } from '../types';
import { mockTalent, mockVideos, mockInvites } from '../data/mockData';

interface TalentState {
  // Profile
  talent: Talent;
  setTalent: (talent: Talent) => void;

  // Videos
  videos: Video[];
  addVideo: (video: Video) => void;

  // Invites
  invites: Invite[];
  updateInviteStatus: (id: string, status: Invite['status']) => void;

  // Recording flow
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  selectedDemoType: string;
  setSelectedDemoType: (type: string) => void;
  maxRecordingTime: number;
  setMaxRecordingTime: (time: number) => void;
  currentVideoData: VideoData | null;
  setCurrentVideoData: (data: VideoData | null) => void;

  // Analysis
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult | null) => void;
}

export const useTalentStore = create<TalentState>((set) => ({
  talent: mockTalent,
  setTalent: (talent) => set({ talent }),

  videos: mockVideos,
  addVideo: (video) => set((state) => ({ videos: [video, ...state.videos] })),

  invites: mockInvites,
  updateInviteStatus: (id, status) =>
    set((state) => ({
      invites: state.invites.map((inv) =>
        inv.id === id ? { ...inv, status } : inv
      ),
    })),

  selectedArea: '',
  setSelectedArea: (area) => set({ selectedArea: area }),
  selectedDemoType: '',
  setSelectedDemoType: (type) => set({ selectedDemoType: type }),
  maxRecordingTime: 600,
  setMaxRecordingTime: (time) => set({ maxRecordingTime: time }),
  currentVideoData: null,
  setCurrentVideoData: (data) => set({ currentVideoData: data }),

  analysisResult: null,
  setAnalysisResult: (result) => set({ analysisResult: result }),
}));
