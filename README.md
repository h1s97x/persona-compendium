# Persona Compendium - 人格面具全书

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

基于 Next.js + React + TypeScript 构建的《女神异闻录》系列角色与内容介绍网站。

## ✨ 功能特性

- ✅ 响应式设计（桌面/平板/移动端）
- ✅ 10 个角色完整数据展示
- ✅ 角色列表与详情页面
- ✅ 图片画廊（灯箱查看）
- ✅ 购买页面（多平台支持）
- ✅ 流畅的页面过渡动画
- ✅ 粒子背景特效
- ✅ 背景音乐播放器
- ✅ 滚动进度条
- ✅ 视频预告片播放
- ✅ SEO 优化

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **UI 库**: React 18
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **状态管理**: Zustand
- **音频**: Howler.js

## 📦 安装

```bash
# 克隆项目
git clone https://cnb.cool/h1s97x/NextPersona.git

# 进入项目目录
cd NextPersona

# 安装依赖
npm install
```

## 🚀 开发

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
persona-compendium/
├── app/                    # Next.js App Router
│   ├── characters/        # 角色页面
│   │   ├── page.tsx      # 角色列表
│   │   └── [id]/         # 角色详情
│   ├── gallery/          # 画廊页面
│   ├── buy/              # 购买页面
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   └── globals.css       # 全局样式
├── components/           # React 组件
│   ├── layout/          # 布局组件
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── character/       # 角色组件
│   │   └── CharacterCard.tsx
│   ├── ui/              # UI 组件
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── ScrollProgress.tsx
│   └── effects/         # 特效组件
│       ├── AudioPlayer.tsx
│       ├── LoadingScreen.tsx
│       ├── PageTransition.tsx
│       └── ParticleBackground.tsx
├── lib/                 # 工具库
│   ├── constants.ts    # 常量定义（角色数据）
│   └── utils.ts        # 工具函数
├── hooks/              # 自定义 Hooks
│   ├── useScroll.ts
│   └── useAnimation.ts
├── store/              # 状态管理
│   ├── useCharacterStore.ts
│   └── useUIStore.ts
├── types/              # TypeScript 类型
│   ├── character.ts
│   └── index.ts
└── public/            # 静态资源
    ├── images/       # 图片
    ├── assets/       # 视频等资源
    └── audio/        # 音频文件
```

## 🎮 角色列表

1. **Joker** (主角) - Arsene
2. **Skull** (坂本龙司) - Captain Kidd
3. **Panther** (高卷杏) - Carmen
4. **Fox** (喜多川祐介) - Goemon
5. **Queen** (新岛真) - Johanna
6. **Oracle** (佐仓双叶) - Necronomicon
7. **Noir** (奥村春) - Milady
8. **Mona** (摩尔加纳) - Zorro
9. **Crow** (明智吾郎) - Robin Hood
10. **Violet** (芳泽霞) - Cendrillon

## 🎨 主题配色

- **主色**: `#E60012` (Persona 红)
- **背景**: `#000000` (黑色)
- **强调色**: `#1a0000` (深红)

## 🎵 音频设置

将背景音乐文件放置在 `public/audio/bgm.mp3`，音频播放器会自动加载。

支持的格式：MP3, OGG, WAV

## 📱 响应式断点

- **移动端**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🚀 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 其他平台

```bash
# 构建静态文件
npm run build

# 输出目录: .next/
```

支持部署到：
- Netlify
- Cloudflare Pages
- AWS Amplify
- 任何支持 Node.js 的平台

## 📝 开发文档

- [改造方案](./docs/改造方案.md) - 技术选型和架构设计
- [实施计划](./docs/实施计划.md) - 开发计划和进度
- [更新说明 v1.1](./docs/更新说明-v1.1.md) - 最新版本更新内容

## 🔧 配置

### 环境变量

创建 `.env.local` 文件：

```env
# 可选配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind 配置

主题配置在 `tailwind.config.ts`：

```typescript
theme: {
  extend: {
    colors: {
      p5r: {
        red: '#E60012',
        black: '#000000',
      }
    }
  }
}
```

## 🐛 已知问题

- 某些浏览器需要用户交互后才能播放音频
- 移动端浏览器可能有音频播放限制
- 粒子数量过多可能影响低端设备性能

## 🔮 未来计划

- [ ] Sitemap 生成
- [ ] robots.txt 配置
- [ ] 更多音效
- [ ] 主题切换
- [ ] 多语言支持
- [ ] 角色对比功能

## 📄 许可

本项目基于 [MIT License](LICENSE) 开源发布，版权归 [h1s97x](https://cnb.cool/h1s97x) 所有。

> 本项目为个人学习项目，与 ATLUS 和 SEGA 无关。
> ©ATLUS ©SEGA All rights reserved.

## 👨‍💻 开发者

ElectroME - 2026

## 🙏 致谢

- ATLUS & SEGA - 游戏开发商
- Next.js 团队 - 优秀的 React 框架
- Framer Motion - 强大的动画库
- Vercel - 便捷的部署平台

