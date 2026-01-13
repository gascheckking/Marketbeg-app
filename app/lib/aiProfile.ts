// app/lib/aiProfile.ts

let bias = 1.0;

export function adjustPrice(basePrice: number) {
  return Math.round(basePrice * bias);
}

export function learnFromDecision(
  suggestedPrice: number,
  acceptedPrice: number
) {
  if (!suggestedPrice || !acceptedPrice) return;

  const ratio = acceptedPrice / suggestedPrice;

  // mild inlärning
  bias = bias * 0.9 + ratio * 0.1;

  // clamp
  bias = Math.max(0.7, Math.min(1.3, bias));
}