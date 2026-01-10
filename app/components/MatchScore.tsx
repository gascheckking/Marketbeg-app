import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';

export default function MatchScore({ score = 92 }: { score?: number }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.label}>AI MATCH</Text>
      <Text style={styles.score}>{score}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#10221c',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 10,
    color: theme.colors.primary,
    fontWeight: '700',
  },
  score: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: '900',
  },
});