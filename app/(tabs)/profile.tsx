import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min profil</Text>
      <Text style={styles.subtitle}>
        BankID & trust-score i kommande faser
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Affärer</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Trust-nivå</Text>
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
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 24,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 12,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 13,
  },
  value: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
  },
});