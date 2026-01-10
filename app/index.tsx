// ─────────────────────────────────────────────
// app/index.tsx
// HOME – KARMA HERO (minimal)
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
          Sälj direkt. Marknaden är redan redo.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(tabs)/sell')}
        >
          <Text style={styles.primaryButtonText}>Starta snabbsälj</Text>
        </TouchableOpacity>
      </View>

      {/* FLOW LIST */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Så funkar KARMA</Text>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>📸 Ett foto</Text>
          <Text style={styles.rowText}>
            AI identifierar objekt och pris.
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>🧠 Direkt match</Text>
          <Text style={styles.rowText}>
            Redo köpare med auto-bud.
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>⚡ Likvid direkt</Text>
          <Text style={styles.rowText}>
            Pengar till din KARMA-plånbok.
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push('/(tabs)/search')}
        >
          <Text style={styles.secondaryText}>Utforska marknaden</Text>
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
    paddingBottom: theme.spacing.xl,
  },

  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 28,
    paddingBottom: 36,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 16,
    color: theme.colors.muted,
    marginBottom: 22,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#000',
  },

  section: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 14,
  },

  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 2,
  },
  rowText: {
    fontSize: 14,
    color: theme.colors.muted,
  },

  secondaryButton: {
    marginTop: 10,
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
    fontSize: 15,
  },
});