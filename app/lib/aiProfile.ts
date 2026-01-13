// app/lib/aiProfile.ts

export type Badge =
  | 'Säljes'
  | 'Paket'
  | 'Snabbt sålt'
  | 'Hög efterfrågan';

type Profile = {
  badgeBias: Record<Badge, number>;
};

let profile: Profile = {
  badgeBias: {
    'Säljes': 1,
    'Paket': 1,
    'Snabbt sålt': 1,
    'Hög efterfrågan': 1,
  },
};

/**
 * Lär av användarens beslut i Preview
 * accepted = true → förstärk
 * accepted = false → tona ner
 */
export function learnFromDecision(
  badge: Badge,
  accepted: boolean
) {
  if (accepted) {
    profile.badgeBias[badge] += 0.25;
  } else {
    profile.badgeBias[badge] = Math.max(
      0.5,
      profile.badgeBias[badge] - 0.15
    );
  }
}

/**
 * Vikt som används i sortering
 */
export function getBadgeWeight(badge: Badge): number {
  return profile.badgeBias[badge] ?? 1;
}

/**
 * (valfritt, debug)
 */
export function getProfile() {
  return profile;
}