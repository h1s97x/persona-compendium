'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { CHARACTERS } from '@/lib/constants';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - 全屏视频背景风格 */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 背景图片/视频效果 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a0000]/80 to-black z-10" />
          <div className="absolute inset-0 bg-[url('/images/bg_header.png')] bg-cover bg-center opacity-30" />
        </div>
        
        {/* 斜线装饰 */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E60012] opacity-10 transform skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-[#E60012] opacity-10 transform -skew-x-12 -translate-x-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 text-center px-4"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-80 h-80 mx-auto mb-12"
          >
            <Image
              src="/images/p5r.png"
              alt="Persona 5 Royal"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* 标题文字 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wider">
              女神异闻录5 皇家版
            </h1>
            <p className="text-[#E60012] text-xl md:text-2xl font-bold">
              好评发售中
            </p>
          </motion.div>

          {/* 按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/buy"
              className="group relative px-12 py-4 bg-[#E60012] text-white text-xl font-bold overflow-hidden"
            >
              <span className="relative z-10">立即购买</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-[#E60012] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                立即购买
              </span>
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="group relative px-12 py-4 border-2 border-[#E60012] text-[#E60012] text-xl font-bold hover:bg-[#E60012] hover:text-white transition-all duration-300"
            >
              观看预告片
            </button>
          </motion.div>

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-sm flex flex-col items-center gap-2"
            >
              <span>SCROLL</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Story Section - 斜线分割 */}
      <section className="relative py-32 px-4 bg-black overflow-hidden">
        {/* 斜线背景 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a0000] to-transparent transform -skew-y-2" />
          <div className="absolute bottom-0 right-0 w-2/3 h-64 bg-[#E60012] opacity-5 transform skew-y-3" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#E60012] mb-12 tracking-wider">
              STORY
            </h2>
            
            <div className="space-y-8 text-white text-lg md:text-xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                少年主人公因为某个理由转学到「东京」的高中，<br />
                同时他也开始做起奇异的梦。<br />
                <span className="text-[#E60012] font-bold">──你正是命运的「囚徒」。</span><br />
                不远的将来，你将面临毁灭。
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                为了达成自己被赋予的『更生』任务，<br />
                也为了将人们从邪恶的欲望中拯救出来，<br />
                成为怪盗的主人公与各式各样的人邂逅，<br />
                缔结了特别的羁绊关系。<br />
                度过这宝贵的一年后，等待着你的会是……？
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Characters Section - 横向滑动 */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black via-[#1a0000] to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#E60012] opacity-5 transform skew-x-12" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-[#E60012] text-center mb-20 tracking-wider"
          >
            CHARACTERS
          </motion.h2>

          {/* 角色轮播 */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 角色图片 */}
              <motion.div
                key={currentCharacter}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[600px]"
              >
                <Image
                  src={CHARACTERS[currentCharacter].images.character}
                  alt={CHARACTERS[currentCharacter].name}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* 角色信息 */}
              <motion.div
                key={`info-${currentCharacter}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white space-y-6"
              >
                <div>
                  <h3 className="text-4xl font-bold mb-2">{CHARACTERS[currentCharacter].name}</h3>
                  <p className="text-[#E60012] text-2xl font-bold mb-4">
                    {CHARACTERS[currentCharacter].codename}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {CHARACTERS[currentCharacter].description}
                  </p>
                </div>

                <div className="border-t border-[#E60012] pt-6">
                  <p className="text-xl">
                    <span className="text-[#E60012] font-bold">人格面具：</span>
                    {CHARACTERS[currentCharacter].persona}
                  </p>
                  <p className="text-gray-400 mt-2">
                    阿尔卡那：{CHARACTERS[currentCharacter].arcana}
                  </p>
                </div>

                <Link
                  href={`/characters/${CHARACTERS[currentCharacter].id}`}
                  className="inline-block px-8 py-3 bg-[#E60012] text-white font-bold hover:bg-[#ff0015] transition-colors"
                >
                  查看详情 →
                </Link>
              </motion.div>
            </div>

            {/* 角色切换按钮 */}
            <div className="flex justify-center gap-3 mt-12">
              {CHARACTERS.map((char, index) => (
                <button
                  key={char.id}
                  onClick={() => setCurrentCharacter(index)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    index === currentCharacter
                      ? 'border-[#E60012] bg-[#E60012]'
                      : 'border-gray-600 hover:border-[#E60012]'
                  }`}
                >
                  <Image
                    src={char.images.icon}
                    alt={char.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </button>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/characters"
                className="inline-block px-12 py-4 border-2 border-[#E60012] text-[#E60012] text-xl font-bold hover:bg-[#E60012] hover:text-white transition-all"
              >
                查看所有角色
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-16 right-0 text-white text-5xl hover:text-[#E60012] transition-colors font-light"
            >
              ×
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full border-4 border-[#E60012]"
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/assets/p5r_pv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}
    </div>
  );
}
