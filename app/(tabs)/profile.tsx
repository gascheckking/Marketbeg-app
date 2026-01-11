// app/(tabs)/profile.tsx
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Din KARMA</Text>
      <Text style={styles.subtitle}>Ditt rykte i ekonomin</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Affärer</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Karma-nivå</Text>
        <Text style={styles.value}>Ny användare</Text>
      </View>

      <Text style={styles.hint}>
        Inställningar & historik kommer här.
      </Text>
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
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 20,
    fontSize: 13,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 11,
  },
  value: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 4,
  },
  hint: {
    marginTop: 18,
    fontSize: 12,
    color: theme.colors.muted,
  },
});