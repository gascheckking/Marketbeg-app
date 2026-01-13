// app/(tabs)/trade.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function TradeScreen() {
  const [have, setHave] = useState<string | null>(null);
  const [want, setWant] = useState<string | null>(null);

  const ready = have && want;

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Byte</Text>
        <Text style={styles.title}>Byt direkt</Text>
        <Text style={styles.subtitle}>
          Inga pengar • Snabb match • AI hjälper
        </Text>
      </View>

      {/* I HAVE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jag har</Text>

        <Pressable
          style={styles.card}
          onPress={() => setHave('Popmoverall stl 86')}
        >
          <Text style={styles.cardTitle}>
            {have ?? 'Välj objekt'}
          </Text>
          <Text style={styles.cardMeta}>
            Kläder • Barn • Valfri
          </Text>
        </Pressable>
      </View>

      {/* I WANT */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jag söker</Text>

        <Pressable
          style={styles.card}
          onPress={() => setWant('Popmoverall stl 92')}
        >
          <Text style={styles.cardTitle}>
            {want ?? 'Välj vad du söker'}
          </Text>
          <Text style={styles.cardMeta}>
            Storlek • Skick • Alternativ
          </Text>
        </Pressable>
      </View>

      {/* AI HINT */}
      {ready && (
        <View style={styles.hint}>
          <Text style={styles.hintText}>
            AI letar efter matchningar just nu
          </Text>
        </View>
      )}

      {/* CTA */}
      <Pressable
        style={[styles.cta, !ready && styles.ctaDisabled]}
        disabled={!ready}
        onPress={() =>
          router.push({
            pathname: '/trade/results',
            params: { have, want },
          })
        }
      >
        <Text style={styles.ctaText}>
          {ready ? 'Hitta matchningar' : 'Välj byte'}
        </Text>
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

  section: {
    marginBottom: theme.spacing.lg,
  },

  sectionTitle: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.muted,
    marginBottom: 8,
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

  hint: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },

  hintText: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  cta: {
    marginTop: 'auto',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    alignItems: 'center',
  },

  ctaDisabled: {
    opacity: 0.4,
  },

  ctaText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});