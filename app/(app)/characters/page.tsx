import type { Metadata } from "next";
import CharacterSearch from "@/components/features/character/CharacterSearch";
import CharacterList from "@/components/features/character/CharacterList";

export const metadata: Metadata = {
  title: "角色介绍",
  description: "心之怪盗团全体成员介绍，支持按名称搜索与阿尔卡那筛选，点击角色卡片查看详细信息。",
};

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-p5r-dark to-black py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-p5r-red mb-4">心之怪盗团</h1>
          <p className="text-white text-xl">搜索或筛选角色，点击卡片查看详细信息</p>
        </div>

        <CharacterSearch />
        <CharacterList />
      </div>
    </div>
  );
}
