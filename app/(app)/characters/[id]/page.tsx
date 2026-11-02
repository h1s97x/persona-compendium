import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CHARACTERS } from "@/lib/constants";
import CharacterProfile from "@/components/features/character/CharacterProfile";

interface CharacterDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return CHARACTERS.map((character) => ({ id: character.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CharacterDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const character = CHARACTERS.find((item) => item.id === id);

  if (!character) {
    return { title: "角色不存在" };
  }

  return {
    title: `${character.name} - ${character.codename}`,
    description: `${character.name}（${character.codename}），阿尔卡那「${character.arcana}」，人格面具 ${character.persona}。${character.description}`,
    openGraph: {
      title: `${character.name} - ${character.codename}`,
      description: character.description,
      type: "profile",
    },
  };
}

export default async function CharacterDetailPage({ params }: CharacterDetailPageProps) {
  const { id } = await params;
  const character = CHARACTERS.find((item) => item.id === id);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
