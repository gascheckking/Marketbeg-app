import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../app/theme';

type Props = {
  title: string;
  price: string;
  label?: string;
};

export default function MiniCard({ title, price, label }: Props) {
  return (
    <LinearGradient
      colors={['#171722', '#0f0f14']}
      style={styles.card}
    >
      {label && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{label}</Text>
        </View>
      )}

      <View style={styles.image} />

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price}>{price}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: theme.radius.lg,
    padding: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  image: {
    height: 90,
    borderRadius: theme.radius.md,
    backgroundColor: '#2a2a36',
    marginBottom: 8,
  },

  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 2,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#000',
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.text,
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '900',
    color: theme.colors.primary,
    marginTop: 2,
  },
});