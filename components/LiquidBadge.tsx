// ─────────────────────────────────────────────
// components/LiquidBadge.tsx
// Minimal liquidity indicator
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function LiquidBadge() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likvid</Text>
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