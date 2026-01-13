// app/upload/preview.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function PreviewScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Prisförslag</Text>

      <View style={styles.card}>
        <Text style={styles.price}>1 500 kr</Text>
        <Text style={styles.meta}>Redo köpare finns</Text>
      </View>

      <Pressable
        style={styles.cta}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.ctaText}>Acceptera & klart</Text>
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
  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 16,
    marginVertical: 20,
  },
  price: {
    fontSize: 28,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  meta: {
    color: theme.colors.muted,
  },
  cta: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
  },
  ctaText: {
    fontWeight: '900',
    color: '#000',
  },
});