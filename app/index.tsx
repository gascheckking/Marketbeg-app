// ─────────────────────────────────────────────
// app/index.tsx
// HOME – KARMA HERO + FLOW
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { theme } from './theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Instant Liquid</Text>
        <Text style={styles.heroSubtitle}>
          Sälj på 30 sekunder. Marknaden väntar redan.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(tabs)/sell')}
        >
          <Text style={styles.primaryButtonText}>Starta snabbsälj</Text>
        </TouchableOpacity>
      </View>

      {/* VALUE PROPS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Så funkar KARMA</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📸 Ett foto</Text>
          <Text style={styles.cardText}>
            AI identifierar objekt, skick och marknadspris.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧠 Direkt match</Text>
          <Text style={styles.cardText}>
            Matchas mot redo köpare med auto-bud.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚡ Likvid direkt</Text>
          <Text style={styles.cardText}>
            Pengar till din KARMA-plånbok direkt vid affär.
          </Text>
        </View>
      </View>

      {/* BUY TEASER */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Utforska marknaden</Text>
        <Text style={styles.muted}>
          Köp-flöde med kategorier & AI-sök
        </Text>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(tabs)/search')}
        >
          <Text style={styles.secondaryText}>Till Köp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  container: {
    paddingBottom: 40,
  },

  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 36,
    paddingBottom: 48,
    backgroundColor: theme.colors.bg,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: theme.colors.muted,
    marginBottom: 28,
    lineHeight: 26,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '900',
    color: '#000',
  },

  section: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 16,
  },
  muted: {
    fontSize: 14,
    color: theme.colors.muted,
    marginBottom: 14,
  },

  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: theme.colors.muted,
    lineHeight: 22,
  },

  secondaryButton: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryText: {
    color: theme.colors.text,
    fontWeight: '700',
  },
});