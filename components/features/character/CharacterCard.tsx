'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Character } from '@/types';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: CharacterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Link href={`/characters/${character.id}`}>
        <div className="relative bg-gradient-to-br from-p5r-dark to-black border-2 border-p5r-red rounded-lg overflow-hidden h-96 cursor-pointer">
          {/* Character Image */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative w-full h-full">
              <Image
                src={character.images.character}
                alt={character.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain object-bottom group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Character Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h3 className="text-2xl font-bold text-white mb-2">{character.name}</h3>
            <p className="text-p5r-red font-bold text-lg mb-2">{character.codename}</p>
            <p className="text-gray-300 text-sm line-clamp-2">{character.description}</p>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-p5r-red/0 group-hover:bg-p5r-red/10 transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
