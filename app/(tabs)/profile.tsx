// app/(tabs)/profile.tsx
// PROFILE – Spotify-style settings & identity

import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

const ROWS = [
  { label: 'Affärer', value: '0' },
  { label: 'Karma-nivå', value: 'Ny användare' },
  { label: 'Historik', value: 'Kommer snart' },
  { label: 'Inställningar' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Din KARMA</Text>
        <Text style={styles.subtitle}>Ditt rykte i ekonomin</Text>
      </View>

      {/* LIST */}
      <View style={styles.list}>
        {ROWS.map((row) => (
          <Pressable key={row.label} style={styles.row}>
            <Text style={styles.rowLabel}>{row.label}</Text>

            <View style={styles.rowRight}>
              {row.value ? (
                <Text style={styles.rowValue}>{row.value}</Text>
              ) : null}
              <Ionicons
                name="chevron-forward"
                size={16}
                color={theme.colors.muted}
              />
            </View>
          </Pressable>
        ))}
      </View>

      {/* FOOTER */}
      <Text style={styles.hint}>
        Mer kontroll och inställningar kommer snart.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingTop: theme.spacing.lg,
  },

  /* HEADER */
  header: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.muted,
    marginTop: 4,
  },

  /* LIST */
  list: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.bg,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.text,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowValue: {
    fontSize: 13,
    color: theme.colors.muted,
  },

  /* FOOTER */
  hint: {
    marginTop: theme.spacing.lg,
    textAlign: 'center',
    fontSize: 12,
    color: theme.colors.muted,
  },
});