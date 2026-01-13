import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../app/theme';

type Props = {
  title: string;
  subtitle?: string;
  price: string;
  badge?: string;
  image?: string; // valfri bild
  loading?: boolean;
};

export default function RichCard({
  title,
  subtitle,
  price,
  badge,
  image,
  loading = false,
}: Props) {
  if (loading) {
    return (
      <View style={styles.skeletonCard}>
        <View style={styles.skeletonImage} />
        <View style={styles.skeletonContent}>
          <View style={styles.skeletonLineWide} />
          <View style={styles.skeletonLine} />
        </View>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={['#1a1a26', '#0e0e14']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}

        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: theme.radius.lg,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.md,
    marginRight: 12,
  },

  imagePlaceholder: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.md,
    backgroundColor: '#2a2a36',
    marginRight: 12,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    flex: 1,
    marginRight: 8,
  },

  price: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: theme.colors.primary,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 2,
  },

  badge: {
    alignSelf: 'flex-start',
    marginTop: 6,
    backgroundColor: theme.colors.card,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.primary,
  },

  /* ---------- SKELETON ---------- */

  skeletonCard: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  skeletonImage: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.md,
    backgroundColor: '#2a2a36',
    marginRight: 12,
  },

  skeletonContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
  },

  skeletonLineWide: {
    height: 12,
    width: '70%',
    backgroundColor: '#2a2a36',
    borderRadius: 6,
  },

  skeletonLine: {
    height: 10,
    width: '40%',
    backgroundColor: '#2a2a36',
    borderRadius: 6,
  },
});