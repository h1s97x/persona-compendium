import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        background: '#000',
      }}
    >
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <Image
          src="/images/chara_star.webp"
          alt=""
          aria-hidden
          width={739}
          height={719}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 380,
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            opacity: 0.14,
            pointerEvents: 'none',
          }}
        />
        <p
          style={{
            position: 'relative',
            fontSize: 'clamp(80px, 16vw, 148px)',
            fontWeight: 900,
            lineHeight: 1,
            color: '#e60012',
            textShadow: '4px 4px 0 #000, 8px 8px 0 rgba(216,180,95,0.25)',
            transform: 'skewX(-8deg)',
          }}
        >
          404
        </p>
        <h1
          style={{
            position: 'relative',
            fontSize: 22,
            fontWeight: 900,
            color: 'var(--p5r-gold-light)',
            letterSpacing: '0.16em',
            marginBottom: 10,
          }}
        >
          页面不存在
        </h1>
        <p style={{ position: 'relative', color: '#9b9385', fontSize: 13, marginBottom: 28 }}>
          你寻找的页面已被抹除，就像被「认知」改变了一样。
        </p>
        <Link href="/" className="p5r-btn">
          <span>返回首页</span>
        </Link>
      </div>
    </div>
  );
}
