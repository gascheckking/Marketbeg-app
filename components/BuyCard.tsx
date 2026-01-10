// ─────────────────────────────────────────────
// components/BuyCard.tsx
// Köp-grid card – MatchScore · Pris · Kategori · Likvid
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
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
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.imageWrap}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}

        <View style={styles.badge}>
          <MatchScore score={match} />
        </View>
      </View>

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      <Text style={styles.category}>{category}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <LiquidBadge />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  imageWrap: {
    position: 'relative',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
  },
  placeholder: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    backgroundColor: '#222',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  category: {
    color: theme.colors.muted,
    fontSize: 12,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: '900',
  },
});