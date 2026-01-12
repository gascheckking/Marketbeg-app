// ─────────────────────────────────────────────
// components/MatchScore.tsx
// Spotify-grade AI confidence label
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function MatchScore({ score = 92 }: { score?: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{score}% AI match</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(11,191,138,0.12)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.primary,
    letterSpacing: 0.3,
  },
});