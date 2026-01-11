// ─────────────────────────────────────────────
// components/BuyCard.tsx
// Spotify-grade market card
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../app/theme';
import MatchScore from './MatchScore';
import LiquidBadge from './LiquidBadge';

type Props = {
  image?: string;
  title: string;
  price: string;
  category: string;
  match?: number;
  onPress?: () => void;
};

export default function BuyCard({
  image,
  title,
  price,
  category,
  match = 90,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.imageWrap}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}

        <View style={styles.match}>
          <MatchScore score={match} />
        </View>
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <View style={styles.row}>
        <Text style={styles.category}>{category}</Text>
        <LiquidBadge />
      </View>

      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.sm,
  },

  imageWrap: {
    marginBottom: theme.spacing.xs,
  },

  image: {
    width: '100%',
    height: 110,
    borderRadius: theme.radius.sm,
  },

  placeholder: {
    width: '100%',
    height: 110,
    borderRadius: theme.radius.sm,
    backgroundColor: '#222',
  },

  match: {
    position: 'absolute',
    top: 6,
    left: 6,
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  category: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },

  price: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: theme.colors.primary,
  },
});