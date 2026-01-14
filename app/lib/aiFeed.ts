// app/lib/aiFeed.ts

import { priceForItem } from './aiPricing';
import { getBadgeWeight } from './aiProfile';

export type FeedItem = {
  id: string;
  title: string;
  price: number;
  badge: 'Säljes' | 'Paket' | 'Snabbt sålt' | 'Hög efterfrågan';
};

const basePriority: Record<FeedItem['badge'], number> = {
  'Snabbt sålt': 1,
  'Hög efterfrågan': 2,
  'Säljes': 3,
  'Paket': 4,
};

export function getHomeFeed(): FeedItem[] {
  const raw: FeedItem[] = Array.from({ length: 12 }).map((_, i) => {
    const ai = priceForItem(i + 1);

    return {
      id: String(i),
      title: `Objekt ${i + 1}`,
      price: ai.price,
      badge: ai.badge,
    };
  });

  return raw.sort((a, b) => {
    const scoreA = basePriority[a.badge] / getBadgeWeight(a.badge);
    const scoreB = basePriority[b.badge] / getBadgeWeight(b.badge);
    return scoreA - scoreB;
  });
}