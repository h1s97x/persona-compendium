import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#E60012] text-8xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(230,0,18,0.6)]">
          404
        </p>
        <h1 className="text-2xl text-white font-bold mb-2 tracking-widest">
          页面不存在
        </h1>
        <p className="text-gray-400 mb-8">
          你寻找的页面已被抹除，就像被「认知」改变了一样。
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-3 bg-[#E60012] text-white font-bold hover:bg-[#ff0015] transition-colors clip-corner"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
