'use client';

import { useDeferredValue, useMemo } from 'react';
import { useCharacterStore } from '@/store/useCharacterStore';

const ARCANAS = ['Fool', 'Magician', 'Priestess', 'Empress', 'Emperor', 'Lovers', 'Chariot', 'Justice', 'Hermit'] as const;

export default function CharacterSearch() {
  const keyword = useCharacterStore((s) => s.searchKeyword);
  const setSearchKeyword = useCharacterStore((s) => s.setSearchKeyword);
  const filterArcana = useCharacterStore((s) => s.filterArcana);
  const setFilterArcana = useCharacterStore((s) => s.setFilterArcana);

  // 延迟值避免输入时筛选渲染阻塞
  const deferredKeyword = useDeferredValue(keyword);

  // 当前生效的筛选条件（合并搜索词 + 阿尔卡那）
  const activeFilters = useMemo(() => {
    const conditions: string[] = [];
    if (deferredKeyword.trim()) conditions.push(`包含「${deferredKeyword.trim()}」`);
    if (filterArcana) conditions.push(`阿尔卡那：${filterArcana}`);
    return conditions;
  }, [deferredKeyword, filterArcana]);

  // 当前筛选结果数量
  const resultCount = useCharacterStore((s) =>
    s.characters.filter(
      (c) =>
        (filterArcana === null || c.arcana === filterArcana) &&
        (deferredKeyword.trim() === '' ||
          [c.name, c.codename, c.persona, c.arcana].some((f) =>
            f.toLowerCase().includes(deferredKeyword.trim().toLowerCase()),
          )),
    ).length,
  );

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
    // 输入搜索词时清空阿尔卡那筛选，避免条件叠加造成困惑
    if (filterArcana) setFilterArcana(null);
  };

  const clearAll = () => {
    setSearchKeyword('');
    setFilterArcana(null);
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto 46px' }}>
      {/* 搜索框 */}
      <div style={{ position: 'relative', marginBottom: 18 }}>
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="搜索角色名 / 代号 / 人格面具 / 阿尔卡那…"
          aria-label="搜索角色"
          className="p5r-input"
          style={{ paddingLeft: 44, paddingRight: 40, paddingTop: 14, paddingBottom: 14 }}
        />
        <svg
          style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 18,
            height: 18,
            color: 'var(--p5r-gold)',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
        {keyword && (
          <button
            type="button"
            onClick={() => setSearchKeyword('')}
            aria-label="清空搜索"
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--p5r-gold-light)',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* 阿尔卡那快捷筛选 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
        <button
          type="button"
          className="p5r-chip"
          data-active={filterArcana === null}
          onClick={() => setFilterArcana(null)}
        >
          <span>全部</span>
        </button>
        {ARCANAS.map((arcana) => (
          <button
            key={arcana}
            type="button"
            className="p5r-chip"
            data-active={filterArcana === arcana}
            onClick={() => setFilterArcana(filterArcana === arcana ? null : arcana)}
          >
            <span>{arcana}</span>
          </button>
        ))}
      </div>

      {/* 当前筛选状态 */}
      {activeFilters.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginTop: 16,
            fontSize: 13,
            color: '#b8ae9b',
          }}
        >
          <span>
            共 <b style={{ color: 'var(--p5r-gold-light)' }}>{resultCount}</b> 位角色
            {activeFilters.map((filter) => (
              <span key={filter} style={{ marginLeft: 6, color: 'var(--p5r-gold)' }}>
                {filter}
              </span>
            ))}
          </span>
          <button
            type="button"
            onClick={clearAll}
            style={{
              background: 'none',
              border: 0,
              color: 'var(--p5r-gold)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            清除筛选
          </button>
        </div>
      )}
    </div>
  );
}
