// ─────────────────────────────────────────────
// components/MatchScore.tsx
// Subtle AI match label
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function MatchScore({ score = 92 }: { score?: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{score}% match</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    color: theme.colors.primary,
    letterSpacing: 0.2,
  },
});