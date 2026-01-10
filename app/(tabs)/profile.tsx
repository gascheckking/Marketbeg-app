// ─────────────────────────────────────────────
// app/(tabs)/profile.tsx
// Profile – Karma Identity
// ─────────────────────────────────────────────

import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Din KARMA</Text>
      <Text style={styles.subtitle}>
        Ditt rykte i ekonomin
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Affärer</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Karma-nivå</Text>
        <Text style={styles.value}>Ny användare</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 26,
    fontSize: 14,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 11,
    letterSpacing: 0.5,
  },
  value: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 6,
  },
});