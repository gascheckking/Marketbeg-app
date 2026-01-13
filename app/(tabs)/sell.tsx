// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function SellScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Sälj snabbt</Text>
      <Text style={styles.sub}>
        Välj hur du vill sälja – AI hjälper dig
      </Text>

      <Pressable
        style={styles.primary}
        onPress={() => router.push('/upload')}
      >
        <Text style={styles.primaryTitle}>Sälj objekt</Text>
        <Text style={styles.primarySub}>
          Ta foto · Pris direkt · Klart
        </Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>Skanna förråd</Text>
        <Text style={styles.cardSub}>
          Många objekt · Paket · AI
        </Text>
      </Pressable>

      <Pressable
        style={styles.card}
        onPress={() => router.push('/(tabs)/trade')}
      >
        <Text style={styles.cardTitle}>Byt / Trada</Text>
        <Text style={styles.cardSub}>
          Direkt byte · Snabb match
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
  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
  },
  sub: {
    color: theme.colors.muted,
    marginBottom: 20,
  },
  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    padding: 18,
    marginBottom: 14,
  },
  primaryTitle: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: '#000',
  },
  primarySub: {
    fontSize: theme.text.sm,
    color: '#000',
    opacity: 0.7,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontWeight: '800',
    color: theme.colors.text,
  },
  cardSub: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },
});