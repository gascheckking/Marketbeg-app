// app/lib/aiProfile.ts
export type UserBias = {
  priceMultiplier: number; // t.ex. 0.9 = sänker pris, 1.1 = höjer
};

let profile: UserBias = {
  priceMultiplier: 1,
};

export function adjustPrice(basePrice: number) {
  return Math.round((basePrice * profile.priceMultiplier) / 10) * 10;
}

export function learnFromDecision(
  acceptedPrice: number,
  suggestedPrice: number
) {
  if (acceptedPrice > suggestedPrice) {
    profile.priceMultiplier += 0.03;
  } else if (acceptedPrice < suggestedPrice) {
    profile.priceMultiplier -= 0.03;
  }

  profile.priceMultiplier = Math.min(
    1.3,
    Math.max(0.7, profile.priceMultiplier)
  );
}

export function getProfile() {
  return profile;
}