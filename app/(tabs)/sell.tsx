// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function SellScreen() {
  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Sälj</Text>
        <Text style={styles.title}>Sälj snabbt</Text>
        <Text style={styles.subtitle}>
          Välj hur du vill sälja – AI hjälper dig
        </Text>
      </View>

      {/* PRIMARY ACTION */}
      <Pressable
        style={styles.primary}
        onPress={() => router.push('/upload')}
      >
        <Text style={styles.primaryTitle}>Sälj objekt</Text>
        <Text style={styles.primaryMeta}>
          Ta foto • Pris direkt • Klart
        </Text>
      </Pressable>

      {/* SECONDARY ACTIONS */}
      <View style={styles.secondaryWrap}>
        <Pressable
          style={styles.secondary}
          onPress={() => router.push('/upload?mode=mass')}
        >
          <Text style={styles.secondaryTitle}>Skanna förråd</Text>
          <Text style={styles.secondaryMeta}>
            Många objekt • Paket • AI
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondary}
          onPress={() => router.push('/trade')}
        >
          <Text style={styles.secondaryTitle}>Byt / Trada</Text>
          <Text style={styles.secondaryMeta}>
            Direkt byte • Snabb match
          </Text>
        </Pressable>
      </View>
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

  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginBottom: theme.spacing.md,
  },

  primaryTitle: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: '#000',
    marginBottom: 6,
  },

  primaryMeta: {
    fontSize: theme.text.sm,
    color: '#000',
    opacity: 0.85,
  },

  secondaryWrap: {
    gap: 12,
  },

  secondary: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  secondaryTitle: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 4,
  },

  secondaryMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },
});