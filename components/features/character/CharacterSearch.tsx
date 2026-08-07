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

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    // 输入搜索词时清空阿尔卡那筛选，避免条件叠加造成困惑
    if (filterArcana) setFilterArcana(null);
  };

  const clearAll = () => {
    setSearchKeyword('');
    setFilterArcana(null);
  };

  return (
    <div className="max-w-4xl mx-auto mb-16 space-y-6">
      {/* 搜索框 */}
      <div className="relative">
        <input
          type="search"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="搜索角色名 / 代号 / 人格面具 / 阿尔卡那…"
          aria-label="搜索角色"
          className="w-full bg-black/60 border-2 border-p5r-red rounded-lg pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-p5r-red-hover focus:ring-2 focus:ring-p5r-red/40 transition-all"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-p5r-red"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
            onClick={() => setSearchKeyword('')}
            aria-label="清空搜索"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-p5r-red transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 阿尔卡那快捷筛选 */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setFilterArcana(null)}
          className={`px-4 py-1.5 rounded-full border-2 text-sm transition-all ${
            filterArcana === null
              ? 'bg-p5r-red border-p5r-red text-white'
              : 'border-gray-600 text-gray-300 hover:border-p5r-red hover:text-p5r-red'
          }`}
        >
          全部
        </button>
        {ARCANAS.map((arcana) => (
          <button
            key={arcana}
            onClick={() => setFilterArcana(filterArcana === arcana ? null : arcana)}
            className={`px-4 py-1.5 rounded-full border-2 text-sm transition-all ${
              filterArcana === arcana
                ? 'bg-p5r-red border-p5r-red text-white'
                : 'border-gray-600 text-gray-300 hover:border-p5r-red hover:text-p5r-red'
            }`}
          >
            {arcana}
          </button>
        ))}
      </div>

      {/* 当前筛选状态 */}
      {activeFilters.length > 0 && (
        <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
          <span>
            共 <span className="text-p5r-red font-bold">{resultCount}</span> 位角色
            {activeFilters.map((f) => (
              <span key={f} className="ml-1 text-p5r-red">
                {f}
              </span>
            ))}
          </span>
          <button
            onClick={clearAll}
            className="text-gray-400 underline underline-offset-4 hover:text-p5r-red transition-colors"
          >
            清除筛选
          </button>
        </div>
      )}
    </div>
  );
}
