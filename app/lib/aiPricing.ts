// app/lib/aiPricing.ts
import { adjustPrice } from './aiProfile';

export type PriceResult = {
  price: number;
  badge: 'Säljes' | 'Paket' | 'Snabbt sålt' | 'Hög efterfrågan';
  confidence: number;
};

const badges = [
  'Säljes',
  'Paket',
  'Snabbt sålt',
  'Hög efterfrågan',
] as const;

export function priceForItem(seed: number): PriceResult {
  const base =
    200 +
    (seed * 137) % 900;

  const confidence =
    60 + (seed * 17) % 35;

  const badge =
    badges[seed % badges.length];

  return {
    price: adjustPrice(
      Math.round(base / 10) * 10
    ),
    badge,
    confidence,
  };
}