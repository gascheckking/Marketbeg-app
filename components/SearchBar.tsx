// ─────────────────────────────────────────────
// components/SearchBar.tsx
// Spotify-style compact search
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../app/theme';

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <View style={[styles.container, compact && styles.compact]}>
      <Ionicons
        name="search-outline"
        size={16}
        color={theme.colors.muted}
      />

      {!compact && (
        <Text style={styles.text}>
          Sök med text, röst eller bild
        </Text>
      )}

      <View style={styles.actions}>
        <Ionicons
          name="mic-outline"
          size={16}
          color={theme.colors.primary}
        />
        <Ionicons
          name="camera-outline"
          size={16}
          color={theme.colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.sm,
  },

  compact: {
    paddingVertical: 8,
  },

  text: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  actions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
});