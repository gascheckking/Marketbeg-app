// app/(tabs)/auction.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { theme } from '../theme';

type Duration = '1h' | '5h' | '24h';

export default function AuctionScreen() {
  const [duration, setDuration] = useState<Duration>('5h');

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Auktion</Text>
        <Text style={styles.title}>Snabb auktion</Text>
        <Text style={styles.subtitle}>
          Kort tid. Snabba bud. Max resultat.
        </Text>
      </View>

      {/* DURATION PICKER */}
      <View style={styles.picker}>
        <Pressable
          style={[
            styles.option,
            duration === '1h' && styles.optionActive,
          ]}
          onPress={() => setDuration('1h')}
        >
          <Text
            style={[
              styles.optionTitle,
              duration === '1h' && styles.optionTitleActive,
            ]}
          >
            1 timme
          </Text>
          <Text style={styles.optionMeta}>Snabb likvid</Text>
        </Pressable>

        <Pressable
          style={[
            styles.option,
            duration === '5h' && styles.optionActive,
          ]}
          onPress={() => setDuration('5h')}
        >
          <Text
            style={[
              styles.optionTitle,
              duration === '5h' && styles.optionTitleActive,
            ]}
          >
            2–5 timmar
          </Text>
          <Text style={styles.optionMeta}>Flest bud</Text>
        </Pressable>

        <Pressable
          style={[
            styles.option,
            duration === '24h' && styles.optionActive,
          ]}
          onPress={() => setDuration('24h')}
        >
          <Text
            style={[
              styles.optionTitle,
              duration === '24h' && styles.optionTitleActive,
            ]}
          >
            24 timmar
          </Text>
          <Text style={styles.optionMeta}>Maxpris</Text>
        </Pressable>
      </View>

      {/* AI HINT */}
      <View style={styles.hint}>
        <Text style={styles.hintText}>
          AI föreslår {duration === '1h'
            ? 'snabb auktion'
            : duration === '5h'
            ? 'optimal tid'
            : 'maximal exponering'}
        </Text>
      </View>

      {/* CTA */}
      <Pressable
        style={styles.cta}
        onPress={() =>
          router.push({
            pathname: '/upload',
            params: { mode: 'auction', duration },
          })
        }
      >
        <Text style={styles.ctaText}>Starta auktion</Text>
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

  picker: {
    gap: 12,
    marginBottom: theme.spacing.lg,
  },

  option: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  optionActive: {
    borderColor: theme.colors.primary,
    backgroundColor: '#14141b',
  },

  optionTitle: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 4,
  },

  optionTitleActive: {
    color: theme.colors.primary,
  },

  optionMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  hint: {
    marginBottom: theme.spacing.lg,
    alignItems: 'center',
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

  ctaText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});