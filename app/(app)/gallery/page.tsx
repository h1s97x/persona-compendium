'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/lib/constants';
import type { GalleryCategory } from '@/types';

type CategoryValue = GalleryCategory | 'all';

const CATEGORY_LABELS: Record<Exclude<CategoryValue, 'all'>, string> = {
  scene: '游戏中的各种纪念照',
  battle: '战斗处决动画',
};

export default function GalleryPage() {
  const [category, setCategory] = useState<CategoryValue>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => (category === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === category)),
    [category],
  );

  const closeLightbox = () => setSelectedImage(null);

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

      {/* 分类筛选 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 34 }}>
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            className="p5r-chip"
            data-active={category === cat.value}
            onClick={() => {
              setCategory(cat.value);
              setSelectedImage(null);
            }}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* 分组展示 */}
      {category === 'all' ? (
        ['scene', 'battle'].map((cat) => (
          <section key={cat} style={{ marginBottom: 44 }}>
            <h2
              className="p5r-h3"
              style={{ transform: 'skewX(-6deg)', marginBottom: 16, paddingLeft: 4 }}
            >
              {CATEGORY_LABELS[cat as Exclude<CategoryValue, 'all'>]}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_IMAGES.filter((img) => img.category === cat).map((image) => {
                const index = filteredImages.findIndex((img) => img.id === image.id);
                return (
                  <GalleryItem
                    key={image.id}
                    image={image}
                    onClick={() => setSelectedImage(index < 0 ? 0 : index)}
                  />
                );
              })}
            </div>
          </section>
        ))
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link href="/buy" className="p5r-btn">
          <span>前往购买</span>
        </Link>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="p5r-modal" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="关闭"
            className="p5r-modal__close"
            style={{ top: -48, right: 0 }}
          >
            ✕
          </button>

          <button
            type="button"
            aria-label="上一张"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
            }}
            className="p5r-modal__nav"
            style={{ left: -6 }}
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="下一张"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
            }}
            className="p5r-modal__nav"
            style={{ right: -6 }}
          >
            ›
          </button>

          <Image
            src={filteredImages[selectedImage].src}
            alt={filteredImages[selectedImage].alt}
            width={1280}
            height={720}
            style={{
              maxWidth: '92vw',
              maxHeight: '84vh',
              width: 'auto',
              height: 'auto',
              border: '3px solid var(--p5r-gold)',
              boxShadow: '0 0 0 6px #000, 0 24px 60px rgba(0,0,0,0.8)',
            }}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

interface GalleryItemProps {
  image: (typeof GALLERY_IMAGES)[number];
  onClick: () => void;
}

function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p5r-card"
      style={{ display: 'block', width: '100%', padding: 0, cursor: 'pointer', textAlign: 'left' }}
    >
      <div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          style={{ objectFit: 'cover', zIndex: 2 }}
        />
      </div>
      <p
        style={{
          padding: '10px 12px',
          fontSize: 12,
          color: '#cfc6b4',
          borderTop: '1px solid rgba(216,180,95,0.25)',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {image.alt}
      </p>
    </button>
  );
}
