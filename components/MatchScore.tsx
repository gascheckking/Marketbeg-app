// ─────────────────────────────────────────────
// components/MatchScore.tsx
// AI Match – minimal system label
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function MatchScore({ score = 92 }: { score?: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{score}% match</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e1a16',
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