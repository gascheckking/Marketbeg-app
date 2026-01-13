// components/MiniCard.tsx
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

type Props = {
  title: string;
  price: string;
  badge?: 'Hög efterfrågan' | 'Snabbt sålt' | 'Lågt värde';
};

export default function MiniCard({ title, price, badge }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.image} />

      {badge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 12,
  },

  image: {
    height: 120,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surface,
    marginBottom: 8,
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#0f1a16',
    borderWidth: 1,
    borderColor: '#1f3a2f',
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.primary,
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
  },

  price: {
    marginTop: 2,
    fontSize: theme.text.sm,
    fontWeight: '900',
    color: theme.colors.primary,
  },
});