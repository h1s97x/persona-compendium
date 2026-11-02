'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: '首页' },
  { href: '/characters', label: '角色' },
  { href: '/gallery', label: '画廊' },
  { href: '/buy', label: '购买' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="p5r-header">
      <div className="p5r-header__in">
        <Link href="/" className="p5r-header__logo" aria-label="Persona 5 Royal 首页">
          <Image src="/images/p5r.png" alt="Persona 5 Royal" width={824} height={567} priority />
        </Link>

        <nav className="p5r-nav p5r-nav--desktop" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p5r-btn${isActive(item.href) ? ' p5r-btn--red' : ''}`}
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            href="https://asia.sega.com/persona-remaster/p5r/cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="p5r-btn p5r-btn--dark"
          >
            <span>官方网站</span>
          </a>
        </nav>

        <button
          type="button"
          className="p5r-nav-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? '收起菜单' : '展开菜单'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="p5r-nav p5r-nav--mobile" aria-label="移动端导航">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`p5r-btn${isActive(item.href) ? ' p5r-btn--red' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            href="https://asia.sega.com/persona-remaster/p5r/cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="p5r-btn p5r-btn--dark"
          >
            <span>官方网站</span>
          </a>
        </nav>
      )}
    </header>
  );
}
