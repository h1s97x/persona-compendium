import type { Metadata } from "next";
import CharacterCard from "@/components/features/character/CharacterCard";
import { CHARACTERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "角色介绍",
  description: "心之怪盗团全体成员介绍，点击角色卡片查看详细信息。",
};

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#E60012] mb-4">心之怪盗团</h1>
          <p className="text-white text-xl">点击角色卡片查看详细信息</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {CHARACTERS.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
