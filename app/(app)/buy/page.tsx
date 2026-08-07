'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PLATFORMS } from '@/lib/constants';

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#E60012] mb-4">购买游戏</h1>
          <p className="text-white text-xl">选择您的平台</p>
        </motion.div>

        {/* Game Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src="/images/cover.png"
                alt="游戏封面"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#E60012]">游戏信息</h2>
              
              <div>
                <h3 className="text-xl font-bold mb-2">游戏名称</h3>
                <p className="text-gray-300">女神异闻录 5 皇家版</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">游戏类型</h3>
                <p className="text-gray-300">JRPG</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">支持平台</h3>
                <p className="text-gray-300">
                  Xbox Game Pass<br />
                  Xbox Series X|S<br />
                  PlayStation®5<br />
                  Nintendo Switch™<br />
                  Steam<br />
                  Windows
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">支持语言</h3>
                <p className="text-gray-300">多语言字幕/日语语音</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#E60012] text-center mb-8">选择购买平台</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORMS.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg p-6 hover:border-[#ff0015] transition-colors"
              >
                <div className="relative h-24 mb-4">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-center font-bold">{platform.name}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012] rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-[#E60012] mb-6">系统需求 (PC)</h2>
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="text-xl font-bold text-[#E60012] mb-4">最低配置</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-white font-bold">操作系统:</span> Windows 10 (64-bit)</li>
                <li><span className="text-white font-bold">处理器:</span> Intel Core i7-4790 / AMD Ryzen 5 1500X</li>
                <li><span className="text-white font-bold">内存:</span> 8 GB RAM</li>
                <li><span className="text-white font-bold">显卡:</span> Nvidia GeForce GTX 650 Ti / AMD Radeon R7 360</li>
                <li><span className="text-white font-bold">存储空间:</span> 需要 41 GB 可用空间</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#E60012] mb-4">推荐配置</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="text-white font-bold">操作系统:</span> Windows 10 (64-bit)</li>
                <li><span className="text-white font-bold">处理器:</span> Intel Core i7-4790 / AMD Ryzen 5 1500X</li>
                <li><span className="text-white font-bold">内存:</span> 8 GB RAM</li>
                <li><span className="text-white font-bold">显卡:</span> Nvidia GeForce GTX 760 / AMD Radeon HD 7870</li>
                <li><span className="text-white font-bold">存储空间:</span> 需要 41 GB 可用空间</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
