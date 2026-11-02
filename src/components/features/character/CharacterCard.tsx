import Image from 'next/image';
import LocaleLink from '@/components/ui/LocaleLink';
import { Character } from '@/types';
import { useCharacterText, useI18n } from '@/components/providers/LocaleProvider';

interface CharacterCardProps {
  character: Character;
  index: number;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { t } = useI18n();
  const text = useCharacterText(character.id, {
    name: character.name,
    description: character.description,
    story: character.story,
  });

  return (
    <LocaleLink
      href={`/characters/${character.id}`}
      className="p5r-card"
      style={{ display: 'block' }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '4 / 5',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 78%, rgba(230,0,18,0.3), rgba(0,0,0,0) 62%)',
        }}
      >
        <Image
          src={character.images.character}
          alt={`${character.codename} / ${text.name}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom center',
            zIndex: 2,
            transform: 'scale(1.03)',
          }}
        />
        <Image
          src={character.images.persona}
          alt=""
          aria-hidden
          width={200}
          height={260}
          style={{
            position: 'absolute',
            right: '2%',
            bottom: '1%',
            width: '52%',
            height: 'auto',
            opacity: 0.28,
            filter: 'saturate(1.15)',
            zIndex: 1,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #050505 4%, transparent 52%)',
            zIndex: 3,
          }}
        />
      </div>

      <div style={{ padding: '0 16px 18px', position: 'relative', zIndex: 4, marginTop: '-18px' }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.24em',
            color: 'var(--p5r-red)',
            fontWeight: 700,
          }}
        >
          {character.arcana}
        </p>
        <h3
          style={{
            fontSize: 21,
            fontWeight: 900,
            color: 'var(--p5r-gold-light)',
            letterSpacing: '0.02em',
            lineHeight: 1.3,
            transform: 'skewX(-4deg)',
          }}
        >
          {character.codename}
        </h3>
        <p style={{ fontSize: 13, color: '#a89f8e', marginBottom: 8 }}>{text.name}</p>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.8,
            color: '#cfc6b4',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {text.description}
        </p>
        <p style={{ marginTop: 10, fontSize: 12, color: 'var(--p5r-gold)' }}>
          {t('characters.cardPersona')} · {character.persona}
        </p>
      </div>
    </LocaleLink>
  );
}
