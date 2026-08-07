'use client';

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CHARACTERS } from '@/lib/constants';

export default function CharacterDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const character = CHARACTERS.find((c) => c.id === id);

  if (!character) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/characters"
            className="inline-block mb-8 text-[#E60012] hover:text-[#ff0015] transition-colors"
          >
            ← 返回角色列表
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Character Images */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg overflow-hidden"
            >
              <Image
                src={character.images.character}
                alt={character.name}
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg overflow-hidden"
            >
              <Image
                src={character.images.persona}
                alt={character.persona}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Character Info */}
          <div className="text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl font-bold mb-2">{character.name}</h1>
              <p className="text-[#E60012] text-2xl font-bold mb-4">{character.codename}</p>
              <p className="text-gray-300 text-lg">{character.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-t border-[#E60012] pt-6"
            >
              <h2 className="text-2xl font-bold text-[#E60012] mb-4">人格面具</h2>
              <p className="text-xl">{character.persona}</p>
              <p className="text-gray-400 mt-2">阿尔卡那：{character.arcana}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-[#E60012] pt-6"
            >
              <h2 className="text-2xl font-bold text-[#E60012] mb-4">属性</h2>
              <div className="space-y-3">
                {Object.entries(character.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{getStatName(key)}</span>
                      <span>{value}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-[#E60012] h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-t border-[#E60012] pt-6"
            >
              <h2 className="text-2xl font-bold text-[#E60012] mb-4">技能</h2>
              <div className="flex flex-wrap gap-2">
                {character.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-[#E60012] px-4 py-2 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-t border-[#E60012] pt-6"
            >
              <h2 className="text-2xl font-bold text-[#E60012] mb-4">故事</h2>
              <p className="text-gray-300 leading-relaxed">{character.story}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatName(key: string): string {
  const names: Record<string, string> = {
    strength: '力量',
    magic: '魔力',
    endurance: '耐久',
    agility: '敏捷',
    luck: '运气',
  };
  return names[key] || key;
}
