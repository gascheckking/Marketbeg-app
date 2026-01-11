// app/index.tsx
// HOME – Spotify-grade start
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { theme } from './theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Instant Liquid</Text>
        <Text style={styles.heroSubtitle}>
          Sälj direkt till redo köpare.
        </Text>

        <TouchableOpacity
          style={styles.primary}
          onPress={() => router.push('/(tabs)/sell')}
        >
          <Text style={styles.primaryText}>Starta snabbsälj</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Så funkar KARMA</Text>

        {[
          ['📸', 'Ett foto', 'AI identifierar objekt & pris'],
          ['🧠', 'Direkt match', 'Redo köpare med auto-bud'],
          ['⚡', 'Likvid direkt', 'Pengar till din KARMA'],
        ].map(([icon, title, text]) => (
          <View key={title} style={styles.row}>
            <Text style={styles.rowTitle}>{icon} {title}</Text>
            <Text style={styles.rowText}>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.secondary}
          onPress={() => router.push('/(tabs)/search')}
        >
          <Text style={styles.secondaryText}>Utforska marknaden</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  container: { paddingBottom: theme.spacing.xl },

  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 18,
    paddingBottom: 28,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: theme.colors.text,
  },
  heroSubtitle: {
    fontSize: 14,
    color: theme.colors.muted,
    marginVertical: 6,
  },

  primary: {
    marginTop: 14,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#000',
  },

  section: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 12,
  },

  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.text,
  },
  rowText: {
    fontSize: 13,
    color: theme.colors.muted,
  },

  secondary: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingVertical: 13,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryText: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
});