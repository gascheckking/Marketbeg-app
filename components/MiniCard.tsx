import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function MiniCard({ title, price }: {
  title: string;
  price: string;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.thumb} />
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 12,
  },
  thumb: {
    height: 80,
    borderRadius: 8,
    backgroundColor: '#222',
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.text,
  },
  price: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});