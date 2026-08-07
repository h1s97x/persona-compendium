'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/images/gallery/screenshot1.png', alt: '游戏截图 1' },
  { id: 2, src: '/images/gallery/screenshot2.png', alt: '游戏截图 2' },
  { id: 3, src: '/images/gallery/screenshot3.png', alt: '游戏截图 3' },
  { id: 4, src: '/images/gallery/screenshot4.png', alt: '游戏截图 4' },
  { id: 5, src: '/images/gallery/screenshot5.png', alt: '游戏截图 5' },
  { id: 6, src: '/images/gallery/screenshot6.png', alt: '游戏截图 6' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#E60012] mb-4">游戏画廊</h1>
          <p className="text-white text-xl">点击图片查看大图</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-64 bg-black border-2 border-[#E60012] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#E60012] transition-colors z-10"
            >
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
              }}
              className="absolute left-4 text-white text-4xl hover:text-[#E60012] transition-colors z-10"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
              }}
              className="absolute right-4 text-white text-4xl hover:text-[#E60012] transition-colors z-10"
            >
              ›
            </button>

            <div className="relative w-full max-w-5xl aspect-video">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
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
