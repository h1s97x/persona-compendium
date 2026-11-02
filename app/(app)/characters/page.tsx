import type { Metadata } from "next";
import Image from "next/image";
import CharacterSearch from "@/components/features/character/CharacterSearch";
import CharacterList from "@/components/features/character/CharacterList";

export const metadata: Metadata = {
  title: "角色介绍",
  description: "心之怪盗团全体成员介绍，支持按名称搜索与阿尔卡那筛选，点击角色卡片查看详细信息。",
};

export default function CharactersPage() {
  return (
    <div className="p5r-page">
      <div className="p5r-page__head">
        <Image
          src="/images/chara_title.webp"
          alt="CHARACTER"
          width={515}
          height={157}
          priority
          className="p5r-page__title"
        />
        <p className="p5r-page__sub">
          心之怪盗团全体成员。
          <br />
          点击卡片查看角色档案与初期人格面具。
        </p>
      </div>

      <CharacterSearch />
      <CharacterList />
    </div>
  );
}
