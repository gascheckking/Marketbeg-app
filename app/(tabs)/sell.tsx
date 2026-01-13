// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function SellScreen() {
  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Sälj</Text>
        <Text style={styles.title}>Sälj snabbt</Text>
        <Text style={styles.subtitle}>
          Välj hur du vill sälja – AI hjälper dig
        </Text>
      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <Pressable
          style={styles.primary}
          onPress={() => router.push('/upload')}
        >
          <Text style={styles.primaryTitle}>Sälj objekt</Text>
          <Text style={styles.primaryMeta}>
            Ta foto • Få pris • Klart
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => router.push('/upload?mode=mass')}
        >
          <Text style={styles.cardTitle}>Skanna förråd</Text>
          <Text style={styles.cardMeta}>
            Flera objekt • Paket • AI
          </Text>
        </Pressable>

        <Pressable
          style={styles.card}
          onPress={() => router.push('/trade')}
        >
          <Text style={styles.cardTitle}>Byt / Trada</Text>
          <Text style={styles.cardMeta}>
            Direkt match • Inget krångel
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
  },

  header: {
    marginBottom: theme.spacing.lg,
  },

  kicker: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 4,
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 4,
  },

  actions: {
    gap: 14,
  },

  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 22,
    paddingHorizontal: 18,
  },

  primaryTitle: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
    marginBottom: 4,
  },

  primaryMeta: {
    fontSize: theme.text.sm,
    color: '#000',
    opacity: 0.8,
  },

  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    paddingVertical: 20,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  cardTitle: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 4,
  },

  cardMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },
});