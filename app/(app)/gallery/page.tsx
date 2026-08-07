'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <div className="min-h-screen bg-gradient-to-b from-black via-p5r-dark to-black py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl font-bold text-p5r-red mb-4">游戏画廊</h1>
          <p className="text-white text-xl">点击图片查看大图</p>
        </motion.div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setCategory(cat.value);
                setSelectedImage(null);
              }}
              className={`px-5 py-2 rounded-full border-2 text-sm font-bold transition-all ${
                category === cat.value
                  ? 'bg-p5r-red border-p5r-red text-white'
                  : 'border-gray-600 text-gray-300 hover:border-p5r-red hover:text-p5r-red'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 分组标题 */}
        {category === 'all' &&
          ['scene', 'battle'].map((cat) => (
            <div key={cat} className="mb-10">
              <h2 className="text-2xl font-bold text-p5r-red mb-6 tracking-wider">
                {CATEGORY_LABELS[cat as Exclude<CategoryValue, 'all'>]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages
                  .filter((img) => img.category === cat)
                  .map((image, index) => (
                    <GalleryItem
                      key={image.id}
                      image={image}
                      index={index}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
              </div>
            </div>
          ))}

        {/* 单分类模式 */}
        {category !== 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-4xl hover:text-p5r-red transition-colors z-10"
              aria-label="关闭"
            >
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
              }}
              className="absolute left-4 text-white text-4xl hover:text-p5r-red transition-colors z-10"
              aria-label="上一张"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-4 text-white text-4xl hover:text-p5r-red transition-colors z-10"
              aria-label="下一张"
            >
              ›
            </button>

            <div className="relative w-full max-w-5xl aspect-video">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface GalleryItemProps {
  image: (typeof GALLERY_IMAGES)[number];
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 bg-black border-2 border-p5r-red rounded-lg overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
