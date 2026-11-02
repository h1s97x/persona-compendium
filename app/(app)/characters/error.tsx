"use client";

export default function CharactersError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 900,
            color: 'var(--p5r-red)',
            letterSpacing: '0.1em',
            transform: 'skewX(-8deg)',
            textShadow: '3px 3px 0 #000',
            marginBottom: 12,
          }}
        >
          出错了
        </p>
        <p style={{ color: '#9b9385', fontSize: 13, marginBottom: 26 }}>
          角色数据加载失败，请稍后重试。
        </p>
        <button type="button" onClick={reset} className="p5r-btn">
          <span>重新加载</span>
        </button>
      </div>
    </div>
  );
}
