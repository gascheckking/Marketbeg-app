import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function MatchScore({ score = 82 }: { score?: number }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Match-score</Text>
      <Text style={styles.score}>{score}%</Text>
      <Text style={styles.sub}>Baserat på efterfrågan & historik</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 13,
    marginBottom: 6,
  },
  score: {
    fontSize: 32,
    fontWeight: '800',
    color: theme.colors.primary,
  },
  sub: {
    color: theme.colors.muted,
    fontSize: 13,
    marginTop: 4,
  },
});