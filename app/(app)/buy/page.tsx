import type { Metadata } from 'next';
import BuyScreen from '@/components/features/buy/BuyScreen';

export const metadata: Metadata = {
  title: '购买指南',
  description:
    '《女神异闻录５ 皇家版》购买指南：对应平台、实体版与下载版、游戏规格与 PC 系统需求。',
};

export default function BuyPage() {
  return <BuyScreen />;
}
