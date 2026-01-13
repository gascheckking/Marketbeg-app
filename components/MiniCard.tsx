import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function MiniCard({
  title,
  price,
  meta,
}: {
  title: string;
  price: string;
  meta?: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.thumb} />

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      {meta && (
        <Text numberOfLines={1} style={styles.meta}>
          {meta}
        </Text>
      )}

      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 132,
    marginRight: 12,
  },

  thumb: {
    height: 88,
    borderRadius: theme.radius.md,
    backgroundColor: '#1a1a22',
    marginBottom: 6,
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },

  meta: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 2,
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});