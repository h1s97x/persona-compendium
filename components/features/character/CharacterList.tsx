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
        <div className="text-center py-24">
          <p className="text-2xl text-gray-400 mb-4">没有找到符合条件的角色</p>
          <p className="text-gray-500">换个关键词或清除筛选试试吧</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
