import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCharacterById(id: string) {
  const { CHARACTERS } = require('./constants');
  return CHARACTERS.find((char: any) => char.id === id);
}
