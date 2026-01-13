import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../app/theme';

export default function BuyCard({
  image,
  title,
  category,
  price,
  meta,
  onPress,
}: {
  image?: string;
  title: string;
  category?: string;
  price: string;
  meta?: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.imageWrap}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      {category && (
        <Text numberOfLines={1} style={styles.category}>
          {category}
        </Text>
      )}

      {meta && (
        <Text numberOfLines={1} style={styles.meta}>
          {meta}
        </Text>
      )}

      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 10,
    width: 160,
  },

  imageWrap: {
    marginBottom: 8,
  },

  image: {
    width: '100%',
    height: 110,
    borderRadius: theme.radius.md,
  },

  placeholder: {
    width: '100%',
    height: 110,
    borderRadius: theme.radius.md,
    backgroundColor: '#1a1a22',
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },

  category: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 2,
  },

  meta: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 4,
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});