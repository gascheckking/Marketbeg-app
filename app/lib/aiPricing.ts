// app/lib/aiPricing.ts
import { adjustPrice } from './aiProfile';

export type PriceBadge =
  | 'Säljes'
  | 'Paket'
  | 'Snabbt sålt'
  | 'Hög efterfrågan';

export type PriceResult = {
  price: number;
  badge: PriceBadge;
  confidence: number; // 0–100
};

const BADGES: PriceBadge[] = [
  'Säljes',
  'Paket',
  'Snabbt sålt',
  'Hög efterfrågan',
];

/**
 * MVP-prissättning
 * Deterministisk, snabb, UI-vänlig
 */
export function priceForItem(
  seed: number
): PriceResult {
  const base =
    200 + (seed * 137) % 900;

  const confidence =
    60 + (seed * 17) % 35;

  const badge =
    BADGES[seed % BADGES.length];

  return {
    price: adjustPrice(
      Math.round(base / 10) * 10
    ),
    badge,
    confidence,
  };
}