// components/MiniCard.tsx
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function MiniCard({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 116,
    marginRight: 12,
    backgroundColor: '#15151b',
    borderRadius: theme.radius.md,
    padding: 8,
  },

  image: {
    height: 76,
    borderRadius: theme.radius.sm,
    backgroundColor: '#22222b',
    marginBottom: 6,
  },

  title: {
    fontSize: theme.text.xs,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },

  price: {
    fontSize: theme.text.xs,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});