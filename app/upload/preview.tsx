// ─────────────────────────────────────────────
// app/upload/preview.tsx
// PREVIEW – Spotify-grade pricing confidence
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../theme';

import MatchScore from '../../components/MatchScore';
import LiquidBadge from '../../components/LiquidBadge';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const router = useRouter();

  const imageUris: string[] = images ? JSON.parse(images as string) : [];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.title}>Prisförslag</Text>
      <Text style={styles.subtitle}>
        Baserat på live-efterfrågan
      </Text>

      {imageUris.map((_, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.topRow}>
            <MatchScore score={92 - i * 3} />
            <LiquidBadge />
          </View>

          <Text style={styles.price}>1 500 kr</Text>
          <Text style={styles.item}>
            Identifierat objekt #{i + 1}
          </Text>
          <Text style={styles.meta}>Redo köpare hittad</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.cta}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.ctaText}>Acceptera och få betalt</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.md,
  },

  title: {
    fontSize: 22,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.muted,
    marginBottom: 18,
  },

  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  price: {
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.primary,
    marginBottom: 6,
  },

  item: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },

  meta: {
    fontSize: 12,
    color: theme.colors.muted,
  },

  cta: {
    marginTop: 18,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#000',
  },
});