// ─────────────────────────────────────────────
// components/SearchBar.tsx
// AI Search – text · röst · bild (KARMA / Spotify-touch)
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

type Props = {
  onPress?: () => void;
};

export default function SearchBar({ onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}
    >
      <Ionicons
        name="search-outline"
        size={20}
        color={theme.colors.muted}
      />

      <Text style={styles.placeholder}>
        Sök med text, röst eller bild
      </Text>

      <View style={styles.actions}>
        <Ionicons
          name="mic-outline"
          size={20}
          color={theme.colors.primary}
        />
        <Ionicons
          name="camera-outline"
          size={20}
          color={theme.colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.lg,
  },
  placeholder: {
    flex: 1,
    marginLeft: 10,
    color: theme.colors.muted,
    fontSize: 15,
  },
  actions: {
    flexDirection: 'row',
    gap: 14,
  },
});