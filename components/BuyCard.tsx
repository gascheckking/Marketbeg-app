// ─────────────────────────────────────────────
// components/BuyCard.tsx
// Minimal buy grid card (Spotify discipline)
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../app/theme'
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
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <View style={styles.imageWrap}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}

        <View style={styles.overlay}>
          <MatchScore score={match} />
        </View>
      </View>

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <View style={styles.meta}>
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
    padding: 12,
  },

  imageWrap: {
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  placeholder: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    backgroundColor: '#222',
  },
  overlay: {
    position: 'absolute',
    top: 6,
    left: 6,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 6,
  },

  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    color: theme.colors.muted,
  },

  price: {
    fontSize: 18,
    fontWeight: '900',
    color: theme.colors.primary,
  },
});