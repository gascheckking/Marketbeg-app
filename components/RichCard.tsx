import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../app/theme';

type Props = {
  title: string;
  subtitle?: string;
  price: string;
  badge?: string;
};

export default function RichCard({
  title,
  subtitle,
  price,
  badge,
}: Props) {
  return (
    <LinearGradient
      colors={['#1a1a26', '#0e0e14']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      {/* IMAGE */}
      <View style={styles.image} />

      {/* CONTENT */}
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
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  image: {
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
});