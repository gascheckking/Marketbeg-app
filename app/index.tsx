import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { theme } from './theme';

import Section from '../components/Section';
import MiniCard from '../components/MiniCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>

      {/* 1. TOPP / IDENTITET */}
      <View style={styles.hero}>
        <Text style={styles.kicker}>Välkommen tillbaka</Text>
        <Text style={styles.title}>Redo att rensa?</Text>

        <TouchableOpacity
          style={styles.primary}
          onPress={() => router.push('/(tabs)/sell')}
        >
          <Text style={styles.primaryText}>Skanna förråd</Text>
        </TouchableOpacity>
      </View>

      {/* 2. KATEGORIER (stabila) */}
      <View style={styles.categories}>
        {['Kläder', 'Skor', 'Hem', 'Elektronik', 'Barn', 'Övrigt'].map((c) => (
          <View key={c} style={styles.categoryPill}>
            <Text style={styles.categoryText}>{c}</Text>
          </View>
        ))}
      </View>

      {/* 3. PERSONLIG VY */}
      <Section title="Utvalt för dig">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Vintagejacka" price="1 200 kr" />
          <MiniCard title="Sneakers i din stil" price="900 kr" />
          <MiniCard title="Retro hoodie" price="650 kr" />
        </ScrollView>
      </Section>

      {/* 4. TREND / MARKNAD */}
      <Section title="Populärt just nu">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Barnkläder vinter" price="Paket" />
          <MiniCard title="Säkerhetskläder" price="Snabbt sålt" />
          <MiniCard title="Småmöbler" price="Hög efterfrågan" />
        </ScrollView>
      </Section>

      {/* 5. UTFORSKA */}
      <Section title="Inspireras">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Allt för 50 kr" price="Paket" />
          <MiniCard title="Ge bort lokalt" price="Gratis" />
        </ScrollView>
      </Section>

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
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  kicker: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginBottom: 4,
  },
  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },

  primary: {
    marginTop: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },

  categories: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  categoryPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  categoryText: {
    fontSize: theme.text.sm,
    color: theme.colors.text,
    fontWeight: '600',
  },
});