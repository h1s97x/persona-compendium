export interface Character {
  id: string;
  name: string;
  codename: string;
  persona: string;
  arcana: string;
  description: string;
  images: {
    character: string;
    persona: string;
    icon: string;
  };
  stats: {
    strength: number;
    magic: number;
    endurance: number;
    agility: number;
    luck: number;
  };
  skills: string[];
  story: string;
}

export type GalleryCategory = 'scene' | 'battle';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export interface Platform {
  name: string;
  logo: string;
  link: string;
}
