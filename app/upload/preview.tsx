// app/upload/preview.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../theme';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const router = useRouter();

  const imageUris: string[] = images
    ? JSON.parse(images as string)
    : [];

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Prisförslag</Text>
        <Text style={styles.subtitle}>
          Baserat på efterfrågan just nu
        </Text>
      </View>

      {/* RESULTAT */}
      {imageUris.map((_, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.price}>1 500 kr</Text>
          <Text style={styles.item}>Identifierat objekt</Text>
          <Text style={styles.meta}>Redo köpare finns</Text>
        </View>
      ))}

      {/* CTA */}
      <TouchableOpacity
        style={styles.cta}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.ctaText}>
          Acceptera och få betalt
        </Text>
      </TouchableOpacity>
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
    paddingBottom: theme.spacing.xl,
  },

  header: {
    marginBottom: theme.spacing.lg,
  },

  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 4,
  },

  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  price: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.primary,
    marginBottom: 4,
  },

  item: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 2,
  },

  meta: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },

  cta: {
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },

  ctaText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});