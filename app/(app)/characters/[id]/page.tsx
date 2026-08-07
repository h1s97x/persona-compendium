import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CHARACTERS } from "@/lib/constants";

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
  const character = CHARACTERS.find((c) => c.id === id);

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

const STAT_NAMES: Record<string, string> = {
  strength: "力量",
  magic: "魔力",
  endurance: "耐久",
  agility: "敏捷",
  luck: "运气",
};

export default async function CharacterDetailPage({
  params,
}: CharacterDetailPageProps) {
  const { id } = await params;
  const character = CHARACTERS.find((c) => c.id === id);

  if (!character) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-p5r-dark to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div>
          <Link
            href="/characters"
            className="inline-block mb-8 text-p5r-red hover:text-p5r-red-hover transition-colors"
          >
            ← 返回角色列表
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Character Images */}
          <div className="space-y-8">
            <div className="relative h-96 bg-gradient-to-br from-p5r-dark to-black border-2 border-p5r-red rounded-lg overflow-hidden">
              <Image
                src={character.images.character}
                alt={character.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
            <div className="relative h-96 bg-gradient-to-br from-p5r-dark to-black border-2 border-p5r-red rounded-lg overflow-hidden">
              <Image
                src={character.images.persona}
                alt={character.persona}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Character Info */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">{character.name}</h1>
              <p className="text-p5r-red text-2xl font-bold mb-4">{character.codename}</p>
              <p className="text-gray-300 text-lg">{character.description}</p>
            </div>

            <div className="border-t border-p5r-red pt-6">
              <h2 className="text-2xl font-bold text-p5r-red mb-4">人格面具</h2>
              <p className="text-xl">{character.persona}</p>
              <p className="text-gray-400 mt-2">阿尔卡那：{character.arcana}</p>
            </div>

            <div className="border-t border-p5r-red pt-6">
              <h2 className="text-2xl font-bold text-p5r-red mb-4">属性</h2>
              <div className="space-y-3">
                {Object.entries(character.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{STAT_NAMES[key] ?? key}</span>
                      <span>{value}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-p5r-red h-2 rounded-full"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-p5r-red pt-6">
              <h2 className="text-2xl font-bold text-p5r-red mb-4">技能</h2>
              <div className="flex flex-wrap gap-2">
                {character.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-p5r-red px-4 py-2 rounded-full text-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-p5r-red pt-6">
              <h2 className="text-2xl font-bold text-p5r-red mb-4">故事</h2>
              <p className="text-gray-300 leading-relaxed">{character.story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
