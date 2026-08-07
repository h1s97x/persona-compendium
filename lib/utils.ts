import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CHARACTERS } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCharacterById(id: string) {
  return CHARACTERS.find((char) => char.id === id);
}
