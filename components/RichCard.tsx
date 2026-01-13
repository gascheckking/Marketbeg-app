import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

type Props = {
  title: string;
  subtitle?: string;
  price?: string;
  badge?: string;
  confidence?: number;
};

export default function RichCard({
  title,
  subtitle,
  price,
  badge,
  confidence,
}: Props) {
  return (
    <View style={styles.card}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {badge}
            </Text>
          </View>
        )}
      </View>

      {/* META */}
      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}

      {/* FOOTER */}
      <View style={styles.footer}>
        {price && (
          <Text style={styles.price}>
            {price}
          </Text>
        )}

        {/* AI CONFIDENCE (SUBTIL) */}
        {typeof confidence === 'number' && (
          <Text style={styles.confidence}>
            {confidence}% match
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.text,
    flex: 1,
    paddingRight: 8,
  },

  badge: {
    backgroundColor: theme.colors.border,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  badgeText: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 6,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: theme.colors.primary,
  },

  confidence: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },
});