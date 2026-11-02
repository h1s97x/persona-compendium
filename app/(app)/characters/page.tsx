import type { Metadata } from "next";
import CharactersScreen from "@/components/features/character/CharactersScreen";

export const metadata: Metadata = {
  title: "角色介绍",
  description: "心之怪盗团全体成员介绍，支持按名称搜索与阿尔卡那筛选，点击角色卡片查看详细信息。",
};

export default function CharactersPage() {
  return <CharactersScreen />;
}
