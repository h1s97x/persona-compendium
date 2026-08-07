import { create } from 'zustand';
import { Character } from '@/types';
import { CHARACTERS } from '@/lib/constants';

interface CharacterState {
  characters: Character[];
  selectedCharacter: Character | null;
  filterArcana: string | null;
  setSelectedCharacter: (character: Character | null) => void;
  setFilterArcana: (arcana: string | null) => void;
  getCharacterById: (id: string) => Character | undefined;
}

export const useCharacterStore = create<CharacterState>((set, get) => ({
  characters: CHARACTERS,
  selectedCharacter: null,
  filterArcana: null,
  setSelectedCharacter: (character) => set({ selectedCharacter: character }),
  setFilterArcana: (arcana) => set({ filterArcana: arcana }),
  getCharacterById: (id) => get().characters.find((c) => c.id === id),
}));
