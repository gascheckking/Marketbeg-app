import { View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>KARMA</Text>
      <Text style={styles.title}>Sälj snabbt.</Text>
      <Text style={styles.subtitle}>
        AI matchar dig direkt mot redo köpare.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Starta snabbförsäljning</Text>
        <Text style={styles.cardMeta}>Foto → annons → match</Text>
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
  eyebrow: {
    color: theme.colors.primary,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.muted,
    marginBottom: 32,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  cardMeta: {
    color: theme.colors.muted,
    marginTop: 6,
  },
});