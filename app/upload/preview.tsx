// ─────────────────────────────────────────────
// app/upload/preview.tsx
// PREVIEW – PRICE / MATCH / LIQUID
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../theme';
import MatchScore from '../components/MatchScore';
import LiquidBadge from '../components/LiquidBadge';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const router = useRouter();

  const imageUris: string[] = images ? JSON.parse(images as string) : [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AI-förslag</Text>
      <Text style={styles.subtitle}>
        Optimerat efter live-efterfrågan
      </Text>

      {imageUris.map((_, i) => (
        <View key={i} style={styles.card}>
          <View style={styles.header}>
            <MatchScore score={92 - i * 3} />
            <LiquidBadge />
          </View>

          <Text style={styles.item}>Identifierat objekt #{i + 1}</Text>
          <Text style={styles.price}>1 500 kr</Text>
          <Text style={styles.meta}>Köpare redo</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.cta} onPress={() => router.replace('/')}>
        <Text style={styles.ctaText}>Acceptera & få betalt</Text>
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
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  item: {
    color: theme.colors.text,
    fontWeight: '700',
  },
  price: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '900',
    marginVertical: 4,
  },
  meta: {
    color: theme.colors.muted,
    fontSize: 12,
  },
  cta: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginTop: 24,
  },
  ctaText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },
});