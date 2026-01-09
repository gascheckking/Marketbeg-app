import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../theme';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const router = useRouter();

  const imageUris: string[] = images ? JSON.parse(images as string) : [];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Förhandsgranskning</Text>

      {imageUris.map((_, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.cardTitle}>AI-förslag #{i + 1}</Text>
          <Text style={styles.cardMeta}>Hög matchchans</Text>
          <Text style={styles.price}>1 500 kr</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.cta} onPress={() => router.replace('/')}>
        <Text style={styles.ctaText}>Publicera alla</Text>
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
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 16,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: 12,
  },
  cardTitle: {
    color: theme.colors.text,
    fontWeight: '700',
  },
  cardMeta: {
    color: theme.colors.muted,
    marginVertical: 6,
  },
  price: {
    color: theme.colors.success,
    fontSize: 20,
    fontWeight: '800',
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
    fontWeight: '800',
    fontSize: 16,
  },
});