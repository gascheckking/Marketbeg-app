import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../app/theme';

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <View style={[styles.container, compact && styles.compact]}>
      <Ionicons name="search-outline" size={14} color={theme.colors.muted} />

      {!compact && (
        <Text style={styles.text}>Sök produkter, röst eller bild</Text>
      )}

      <View style={styles.actions}>
        <Ionicons name="mic-outline" size={14} color={theme.colors.primary} />
        <Ionicons name="camera-outline" size={14} color={theme.colors.primary} />
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 8,
  },
  compact: {
    paddingVertical: 6,
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
    color: theme.colors.muted,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
});