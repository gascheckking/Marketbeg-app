import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../app/theme';

export default function RowItem({
  title,
  subtitle,
  price,
}: {
  title: string;
  subtitle?: string;
  price: string;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {subtitle && (
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>

      <View style={styles.right}>
        <Text style={styles.price}>{price}</Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color={theme.colors.muted}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  left: {
    flex: 1,
    paddingRight: 8,
  },

  title: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginTop: 2,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  price: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: theme.colors.primary,
  },
});