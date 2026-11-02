import type { Metadata } from 'next';
import GalleryBrowser from '@/components/features/gallery/GalleryBrowser';

export const metadata: Metadata = {
  title: '游戏画廊',
  description:
    '《女神异闻录５ 皇家版》游戏截图与战斗处决动画，点击查看大图，支持分类筛选与左右切换。',
};

export default function GalleryPage() {
  return (
    <div className="p5r-page">
      <div className="p5r-page__head">
        <h1 className="p5r-h2" style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
          GALLERY
        </h1>
        <p className="p5r-page__sub">
          截取自游戏内的名场面与战斗演出。
          <br />
          点击图片查看大图，支持左右切换。
        </p>
      </div>

      <GalleryBrowser />
    </div>
  );
}
