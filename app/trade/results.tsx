// app/trade/results.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { theme } from '../theme';

type Match = {
  id: string;
  title: string;
  meta: string;
  valueHint: string;
};

export default function TradeResultsScreen() {
  const { have, want } = useLocalSearchParams<{
    have?: string;
    want?: string;
  }>();

  // Mockade matchningar (v1)
  const matches: Match[] = [
    {
      id: '1',
      title: 'Popmoverall stl 92',
      meta: 'Mycket gott skick • 2 km bort',
      valueHint: 'Direkt byte',
    },
    {
      id: '2',
      title: 'Popmoverall stl 92',
      meta: 'Bra skick • 5 km bort',
      valueHint: 'Snabb respons',
    },
    {
      id: '3',
      title: 'Alternativ: stl 90',
      meta: 'Nyskick • 8 km bort',
      valueHint: 'Flexibel',
    },
  ];

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Matchningar</Text>
        <Text style={styles.title}>Direkt byte</Text>
        <Text style={styles.subtitle}>
          {have} → {want}
        </Text>
      </View>

      {/* LIST */}
      <ScrollView contentContainerStyle={styles.list}>
        {matches.map((m) => (
          <Pressable
            key={m.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/trade/chat',
                params: { matchId: m.id },
              })
            }
          >
            <View style={styles.thumb} />

            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{m.title}</Text>
              <Text style={styles.cardMeta}>{m.meta}</Text>
            </View>

            <Text style={styles.cardHint}>{m.valueHint}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* FOOTER CTA */}
      <Pressable
        style={styles.ctaSecondary}
        onPress={() => router.back()}
      >
        <Text style={styles.ctaSecondaryText}>Ändra byte</Text>
      </Pressable>
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

  list: {
    gap: 12,
    paddingBottom: theme.spacing.xl,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  thumb: {
    width: 56,
    height: 56,
    borderRadius: theme.radius.md,
    backgroundColor: '#242433',
  },

  cardBody: {
    flex: 1,
  },

  cardTitle: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 2,
  },

  cardMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  cardHint: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.primary,
  },

  ctaSecondary: {
    marginTop: theme.spacing.md,
    alignItems: 'center',
  },

  ctaSecondaryText: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },
});