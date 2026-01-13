// app/lib/aiPricing.ts
import { adjustPrice } from './aiProfile';

export type PriceResult = {
  price: number;
  label: 'Hög efterfrågan' | 'Snabbt sålt' | 'Lågt värde';
  confidence: number;
};

const labels = ['Hög efterfrågan', 'Snabbt sålt', 'Lågt värde'] as const;

export function priceForImage(uri: string, index: number): PriceResult {
  const base = 150 + (index * 73) % 900;
  const confidence = 60 + (index * 11) % 35;
  const label = labels[index % labels.length];

  const adjusted = adjustPrice(Math.round(base / 10) * 10);

  return {
    price: adjusted,
    label,
    confidence,
  };
}

export function packageSuggestion(results: PriceResult[]) {
  const total = results.reduce((s, r) => s + r.price, 0);
  const avg = total / results.length;

  if (avg < 200) {
    return {
      title: 'Paket',
      price: Math.max(50, Math.round((total * 0.35) / 10) * 10),
      reason: 'Lågt värde – paket säljer snabbare',
    };
  }

  return null;
}