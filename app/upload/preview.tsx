// app/upload/preview.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { theme } from '../theme';
import { priceForImage, packageSuggestion } from '../lib/aiPricing';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const uris: string[] = images ? JSON.parse(images as string) : [];

  const results = uris.map((uri, i) => priceForImage(uri, i));
  const pack = packageSuggestion(results);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Prisförslag</Text>
      <Text style={styles.sub}>Baserat på efterfrågan just nu</Text>

      {results.map((r, i) => (
        <View key={i} style={styles.card}>
          <View>
            <Text style={styles.price}>{r.price} kr</Text>
            <Text style={styles.meta}>{r.label}</Text>
          </View>
          <View style={styles.confWrap}>
            <Text style={styles.conf}>{r.confidence}% match</Text>
          </View>
        </View>
      ))}

      {pack && (
        <View style={styles.pack}>
          <Text style={styles.packTitle}>{pack.title}</Text>
          <Text style={styles.packPrice}>{pack.price} kr</Text>
          <Text style={styles.packReason}>{pack.reason}</Text>
        </View>
      )}

      <Pressable
        style={styles.cta}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.ctaText}>Acceptera & publicera</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  container: { padding: theme.spacing.lg, paddingBottom: 120 },

  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
  },
  sub: {
    marginTop: 4,
    color: theme.colors.muted,
    marginBottom: 16,
  },

  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    fontSize: 22,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  meta: {
    marginTop: 2,
    color: theme.colors.muted,
  },

  confWrap: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#0f1a16',
    borderWidth: 1,
    borderColor: '#1f3a2f',
  },
  conf: {
    color: theme.colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },

  pack: {
    marginTop: 12,
    backgroundColor: '#141b18',
    borderRadius: theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1f3a2f',
  },
  packTitle: {
    color: theme.colors.primary,
    fontWeight: '900',
  },
  packPrice: {
    marginTop: 4,
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  packReason: {
    marginTop: 6,
    color: theme.colors.muted,
  },

  cta: {
    position: 'absolute',
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    bottom: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    fontWeight: '900',
    color: '#000',
  },
});