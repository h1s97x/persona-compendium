import type { Metadata } from 'next';
import BuyScreen from '@/components/features/buy/BuyScreen';
import { buildMetadata } from '@/lib/i18n/meta';

export const metadata: Metadata = buildMetadata('zh-CN', 'buy', '/buy');

export default function Page() {
  return <BuyScreen />;
}
