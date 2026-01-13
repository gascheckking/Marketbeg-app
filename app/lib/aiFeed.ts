// app/lib/aiFeed.ts
import { priceForItem } from './aiPricing';

export type FeedItem = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  badge: string;
};

export function getHomeFeed(): FeedItem[] {
  const raw = [
    { id: '1', title: 'Nike Air Max 97', subtitle: 'Säljes' },
    { id: '2', title: 'North Face', subtitle: 'Nästan nyskick' },
    { id: '3', title: 'Streetwear paket', subtitle: 'Mycket bra skick' },
    { id: '4', title: 'Barnkläder vinter', subtitle: 'Flera köpare' },
    { id: '5', title: 'Säkerhetskläder', subtitle: 'Efterfrågas lokalt' },
  ];

  return raw.map((item, i) => {
    const ai = priceForItem(i + 1);

    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      price:
        ai.badge === 'Paket'
          ? 'Paket'
          : `${ai.price} kr`,
      badge: ai.badge,
    };
  });
}