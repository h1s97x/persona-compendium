export interface Character {
  id: string;
  name: string;
  codename: string;
  persona: string;
  arcana: string;
  description: string;
  images: {
    /** 怪盗服立绘（官网 costume2） */
    character: string;
    /** 校服立绘（官网 costume1），部分角色没有校服版本 */
    school?: string;
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
  /** 原图像素尺寸：截图并非统一 16:9（1060×707 / 1256×707），需按原比例展示 */
  w: number;
  h: number;
}

export interface Platform {
  name: string;
  logo: string;
  link: string;
}
