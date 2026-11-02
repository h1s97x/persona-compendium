'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useI18n } from '@/components/providers/LocaleProvider';
import { localePath } from '@/lib/i18n/paths';

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

/** 自动带上当前语言前缀的站内链接 */
export default function LocaleLink({ href, ...rest }: LocaleLinkProps) {
  const { locale } = useI18n();

  return <Link href={localePath(locale, href)} {...rest} />;
}
