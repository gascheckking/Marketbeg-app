import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Köp</Text>
      <Text style={styles.subtitle}>
        Filtrera via rullgardiner (kommer härnäst)
      </Text>

      <View style={styles.fakeCard}>
        <Text style={styles.fakeText}>Kategori</Text>
      </View>
      <View style={styles.fakeCard}>
        <Text style={styles.fakeText}>Pris</Text>
      </View>
      <View style={styles.fakeCard}>
        <Text style={styles.fakeText}>Skick</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.md,
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
  fakeCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 12,
  },
  fakeText: {
    color: theme.colors.text,
    fontWeight: '600',
  },
});