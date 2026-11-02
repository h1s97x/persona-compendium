import { create } from 'zustand';

interface UIState {
  isLoading: boolean;
  isMusicPlaying: boolean;
  volume: number;
  setLoading: (loading: boolean) => void;
  setMusicPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  isMusicPlaying: false,
  volume: 0.5,
  setLoading: (loading) => set({ isLoading: loading }),
  setMusicPlaying: (playing) => set({ isMusicPlaying: playing }),
  setVolume: (volume) => set({ volume }),
}));
