// ─────────────────────────────────────────────
// components/SearchBar.tsx
// Sticky / compact AI SearchBar
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../app/theme';

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <Animated.View
      style={[
        styles.container,
        compact && styles.compact,
      ]}
    >
      <Ionicons
        name="search-outline"
        size={18}
        color={theme.colors.muted}
      />

      {!compact && (
        <Text style={styles.text}>Sök med text, röst eller bild</Text>
      )}

      <View style={styles.actions}>
        <Ionicons name="mic-outline" size={18} color={theme.colors.primary} />
        <Ionicons name="camera-outline" size={18} color={theme.colors.primary} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.md,
  },
  compact: {
    paddingVertical: 10,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: theme.colors.muted,
  },
  actions: {
    flexDirection: 'row',
    gap: 14,
  },
});