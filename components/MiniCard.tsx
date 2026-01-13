import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

type Props = {
  title: string;
  price?: string;
  badge?: 'Säljes' | 'Paket' | 'Snabbt sålt' | 'Hög efterfrågan';
};

export default function MiniCard({ title, price, badge }: Props) {
  return (
    <View style={styles.card}>
      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      {price && (
        <Text style={styles.price}>{price}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.border,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
  },

  badgeText: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    fontWeight: '600',
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 6,
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});