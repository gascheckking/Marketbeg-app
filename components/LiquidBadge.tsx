// ─────────────────────────────────────────────
// components/LiquidBadge.tsx
// Subtle liquidity indicator
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
    backgroundColor: '#0f1f19',
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