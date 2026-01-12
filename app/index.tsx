// app/index.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { theme } from './theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>Instant Liquid</Text>
        <Text style={styles.subtitle}>
          Sälj direkt till köpare som redan väntar.
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
          ['📸', 'Ett foto', 'AI identifierar objekt och pris'],
          ['🧠', 'Direkt match', 'Automatiska köpare'],
          ['⚡', 'Likvid direkt', 'Pengar på sekunder'],
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
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  container: {
    paddingBottom: theme.spacing.xl,
  },

  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 14,
    paddingBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '900',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.muted,
    marginVertical: 6,
  },

  primary: {
    marginTop: 12,
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
    paddingTop: 16,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 10,
  },

  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  rowTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
  },

  rowText: {
    fontSize: 12,
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
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.text,
  },
});