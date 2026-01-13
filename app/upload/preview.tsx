import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { theme } from '../theme';
import { priceForItem } from '../lib/aiPricing';
import { learnFromDecision } from '../lib/aiProfile';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const uris: string[] = images ? JSON.parse(images as string) : [];

  const results = uris.map((_, i) => priceForItem(i + 1));

  const publish = () => {
    results.forEach((r) => {
      learnFromDecision(r.price, r.price);
    });

    router.replace('/upload/confirm');
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Prisförslag</Text>
      <Text style={styles.subtitle}>
        AI-förslag baserat på efterfrågan
      </Text>

      {results.map((r, i) => (
        <View key={i} style={styles.card}>
          <View>
            <Text style={styles.price}>{r.price} kr</Text>
            <Text style={styles.badge}>{r.badge}</Text>
          </View>
          <Text style={styles.conf}>
            {r.confidence}% match
          </Text>
        </View>
      ))}

      <Pressable style={styles.cta} onPress={publish}>
        <Text style={styles.ctaText}>
          Publicera nu
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  container: {
    padding: theme.spacing.lg,
    paddingBottom: 120,
  },
  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
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
  badge: {
    color: theme.colors.muted,
  },
  conf: {
    fontWeight: '700',
    color: theme.colors.primary,
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