"use client";

export default function CharactersError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-p5r-dark to-black flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-p5r-red text-6xl font-bold mb-4">出错了</p>
        <p className="text-gray-400 mb-8">角色数据加载失败，请稍后重试。</p>
        <button
          onClick={reset}
          className="px-10 py-3 bg-p5r-red text-white font-bold hover:bg-p5r-red-hover transition-colors clip-corner"
        >
          重新加载
        </button>
      </div>
    </div>
  );
}
