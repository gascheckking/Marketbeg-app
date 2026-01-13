// app/index.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from './theme';

import Section from '../components/Section';
import MiniCard from '../components/MiniCard';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO GRADIENT */}
      <LinearGradient
        colors={['#14141b', '#0b0b0f']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.heroWrap}
      >
        <View style={styles.hero}>
          <Text style={styles.kicker}>Välkommen tillbaka</Text>
          <Text style={styles.title}>Karma</Text>
          <Text style={styles.subtitle}>Hitta något nytt idag</Text>

          {/* KARMA CARD */}
          <LinearGradient
            colors={['#1e1e2a', '#14141b']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.karmaCard}
          >
            <Text style={styles.karmaLabel}>KARMA-SCORE</Text>
            <Text style={styles.karmaValue}>1 250</Text>
            <Text style={styles.karmaMeta}>Eco-hjälte</Text>

            <View style={styles.karmaActions}>
              <Pressable style={styles.karmaPrimary}>
                <Text style={styles.karmaPrimaryText}>Tjäna Karma</Text>
              </Pressable>
              <Pressable style={styles.karmaSecondary}>
                <Text style={styles.karmaSecondaryText}>Min impact</Text>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </LinearGradient>

      {/* CATEGORIES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {['Kläder', 'Skor', 'Hem', 'Elektronik', 'Barn', 'Övrigt'].map(
          (c) => (
            <View key={c} style={styles.category}>
              <Text style={styles.categoryText}>{c}</Text>
            </View>
          )
        )}
      </ScrollView>

      {/* SECTIONS */}
      <Section title="Utvalt för dig">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Vintagejacka" price="1 200 kr" />
          <MiniCard title="Sneakers i din stil" price="900 kr" />
          <MiniCard title="Retro hoodie" price="650 kr" />
        </ScrollView>
      </Section>

      <Section title="Populärt just nu">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Barnkläder vinter" price="Paket" />
          <MiniCard title="Säkerhetskläder" price="Snabbt sålt" />
          <MiniCard title="Småmöbler" price="Hög efterfrågan" />
        </ScrollView>
      </Section>

      <Section title="Utvalda samlingar">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Vintagefynd" price="Handplockat" />
          <MiniCard title="Märkesväskor" price="30 % rabatt" />
          <MiniCard title="Allt för 50 kr" price="Paket" />
        </ScrollView>
      </Section>

      {/* SELL */}
      <Pressable
        style={styles.sellHint}
        onPress={() => router.push('/(tabs)/sell')}
      >
        <Text style={styles.sellHintText}>Vill du sälja något?</Text>
      </Pressable>
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

  heroWrap: {
    paddingBottom: theme.spacing.lg,
  },

  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
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
    marginTop: 2,
  },

  karmaCard: {
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.lg,
    padding: 16,
  },

  karmaLabel: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },

  karmaValue: {
    fontSize: 34,
    fontWeight: '900',
    color: theme.colors.text,
    marginTop: 2,
  },

  karmaMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 2,
  },

  karmaActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: theme.spacing.sm,
  },

  karmaPrimary: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 10,
    alignItems: 'center',
  },

  karmaPrimaryText: {
    fontSize: theme.text.sm,
    fontWeight: '800',
    color: '#000',
  },

  karmaSecondary: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: theme.radius.md,
    paddingVertical: 10,
    alignItems: 'center',
  },

  karmaSecondaryText: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.text,
  },

  categories: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    gap: 8,
  },

  category: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  categoryText: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
  },

  sellHint: {
    marginTop: theme.spacing.lg,
    alignItems: 'center',
  },

  sellHintText: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },
});