'use client';

import { useDeferredValue, useMemo } from 'react';
import { useCharacterStore } from '@/store/useCharacterStore';
import CharacterCard from '@/components/features/character/CharacterCard';

export default function CharacterList() {
  const characters = useCharacterStore((s) => s.characters);
  const filterArcana = useCharacterStore((s) => s.filterArcana);
  const searchKeyword = useCharacterStore((s) => s.searchKeyword);

  // 延迟值让筛选结果渲染不阻塞输入
  const deferredArcana = useDeferredValue(filterArcana);
  const deferredKeyword = useDeferredValue(searchKeyword);

  const filtered = useMemo(() => {
    const kw = deferredKeyword.trim().toLowerCase();
    return characters.filter((c) => {
      const matchArcana = deferredArcana === null || c.arcana === deferredArcana;
      const matchKeyword =
        kw === '' ||
        [c.name, c.codename, c.persona, c.arcana].some((f) =>
          f.toLowerCase().includes(kw),
        );
      return matchArcana && matchKeyword;
    });
  }, [characters, deferredArcana, deferredKeyword]);

  return (
    <>
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <p style={{ fontSize: 20, color: 'var(--p5r-gold-light)', fontWeight: 700, marginBottom: 8 }}>
            没有找到符合条件的角色
          </p>
          <p style={{ color: '#8b8477', fontSize: 13 }}>换个关键词或清除筛选试试吧</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
