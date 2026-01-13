import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../app/theme';
import { useState } from 'react';
import TradeSheet from './TradeSheet';
import AuctionSheet from './AuctionSheet';

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
  const [auctionOpen, setAuctionOpen] = useState(false);
  const [tradeOpen, setTradeOpen] = useState(false);

  return (
    <>
      <LinearGradient
        colors={['#1a1a26', '#0e0e14']}
        style={styles.card}
      >
        <View style={styles.image} />

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

          <View style={styles.actions}>
            <Pressable
              style={styles.actionPrimary}
              onPress={() => setAuctionOpen(true)}
            >
              <Text style={styles.actionPrimaryText}>
                Auktion
              </Text>
            </Pressable>

            <Pressable
              style={styles.actionSecondary}
              onPress={() => setTradeOpen(true)}
            >
              <Text style={styles.actionSecondaryText}>
                Byt
              </Text>
            </Pressable>
          </View>

          {badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badge}</Text>
            </View>
          )}
        </View>
      </LinearGradient>

      <AuctionSheet
        visible={auctionOpen}
        onClose={() => setAuctionOpen(false)}
        title={title}
      />

      <TradeSheet
        visible={tradeOpen}
        onClose={() => setTradeOpen(false)}
        title={title}
      />
    </>
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
    backgroundColor: '#2a2a36',
    marginRight: 12,
  },

  content: {
    flex: 1,
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

  actions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },

  actionPrimary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  actionPrimaryText: {
    fontWeight: '900',
    color: '#000',
  },

  actionSecondary: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.sm,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  actionSecondaryText: {
    color: theme.colors.text,
    fontWeight: '700',
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