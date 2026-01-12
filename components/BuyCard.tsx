import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../app/theme';
import MatchScore from './MatchScore';
import LiquidBadge from './LiquidBadge';

export default function BuyCard({
  image,
  title,
  price,
  category,
  match = 90,
  onPress,
}: {
  image?: string;
  title: string;
  price: string;
  category: string;
  match?: number;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
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

      <Text numberOfLines={1} style={styles.title}>{title}</Text>

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
    borderRadius: theme.radius.md,
    padding: 10,
  },
  imageWrap: {
    marginBottom: 6,
  },
  image: {
    width: '100%',
    height: 96,
    borderRadius: 8,
  },
  placeholder: {
    width: '100%',
    height: 96,
    borderRadius: 8,
    backgroundColor: '#222',
  },
  match: {
    position: 'absolute',
    top: 6,
    left: 6,
  },
  title: {
    fontSize: 13,
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
    fontSize: 11,
    color: theme.colors.muted,
  },
  price: {
    fontSize: 16,
    fontWeight: '900',
    color: theme.colors.primary,
  },
});