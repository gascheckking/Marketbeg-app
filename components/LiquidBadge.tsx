// ─────────────────────────────────────────────
// components/LiquidBadge.tsx
// Spotify-style liquidity status
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function LiquidBadge() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Likvid nu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    color: theme.colors.text,
    opacity: 0.85,
    letterSpacing: 0.2,
  },
});