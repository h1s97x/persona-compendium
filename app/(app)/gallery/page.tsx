import type { Metadata } from 'next';
import GalleryBrowser from '@/components/features/gallery/GalleryBrowser';

export const metadata: Metadata = {
  title: '游戏画廊',
  description:
    '《女神异闻录５ 皇家版》游戏截图与战斗处决动画，点击查看大图，支持分类筛选与左右切换。',
};

export default function GalleryPage() {
  return <GalleryBrowser />;
}
