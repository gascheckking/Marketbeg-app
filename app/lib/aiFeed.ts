import { priceForItem } from './aiPricing';

export type FeedItem = {
  id: string;
  title: string;
  price: number;
  badge: 'Säljes' | 'Paket' | 'Snabbt sålt' | 'Hög efterfrågan';
};

const badgePriority: Record<FeedItem['badge'], number> = {
  'Snabbt sålt': 1,
  'Hög efterfrågan': 2,
  'Säljes': 3,
  'Paket': 4,
};

export function getHomeFeed(): FeedItem[] {
  const raw = Array.from({ length: 12 }).map((_, i) => {
    const ai = priceForItem(i + 1);

    return {
      id: String(i),
      title: `Objekt ${i + 1}`,
      price: ai.price,
      badge: ai.badge,
    };
  });

  return raw.sort(
    (a, b) =>
      badgePriority[a.badge] - badgePriority[b.badge]
  );
}