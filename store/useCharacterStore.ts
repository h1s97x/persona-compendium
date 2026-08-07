import { create } from 'zustand';
import { Character } from '@/types';
import { CHARACTERS } from '@/lib/constants';

interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
  filterArcana: string | null;
  searchKeyword: string;
  setSelectedCharacter: (character: Character | null) => void;
  setFilterArcana: (arcana: string | null) => void;
  setSearchKeyword: (keyword: string) => void;
  getCharacterById: (id: string) => Character | undefined;
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
  characters: CHARACTERS,
  selectedCharacter: null,
  filterArcana: null,
  searchKeyword: '',
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setFilterArcana: (arcana) => set({ filterArcana: arcana }),
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  getCharacterById: (id) => get().characters.find((c) => c.id === id),
}));
