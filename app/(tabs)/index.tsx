// app/(tabs)/index.tsx

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo } from 'react';

import { theme } from '../theme';
import Section from '../../components/Section';
import RichCard from '../../components/RichCard';

import { getHomeFeed } from '../lib/aiFeed';
import { track } from '../lib/analytics';

export default function HomeScreen() {
  // Track home view (KPI)
  useEffect(() => {
    track('home_viewed');
  }, []);

  // AI feed (deterministisk, snabb)
  const feed = useMemo(() => getHomeFeed(), []);

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* =======================
          HERO / CONTEXT
         ======================= */}
      <View style={styles.hero}>
        <Text style={styles.kicker}>Välkommen tillbaka</Text>
        <Text style={styles.title}>Karma</Text>
        <Text style={styles.subtitle}>Hitta något nytt idag</Text>

        {/* KARMA STATUS */}
        <LinearGradient
          colors={['#1b1b28', '#0f0f14']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.karmaCard}
        >
          <Text style={styles.karmaLabel}>KARMA-SCORE</Text>
          <Text style={styles.karmaValue}>1 250</Text>
          <Text style={styles.karmaMeta}>Eco-hjälte</Text>

          <View style={styles.karmaActions}>
            <Pressable style={styles.primaryBtn}>
              <Text style={styles.primaryText}>Tjäna Karma</Text>
            </Pressable>

            <Pressable style={styles.secondaryBtn}>
              <Text style={styles.secondaryText}>Min impact</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>

      {/* =======================
          CATEGORIES (STATIC)
         ======================= */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {['Kläder', 'Skor', 'Hem', 'Elektronik', 'Barn'].map(
          (category) => (
            <View key={category} style={styles.category}>
              <Text style={styles.categoryText}>
                {category}
              </Text>
            </View>
          )
        )}
      </ScrollView>

      {/* =======================
          AI FEED SECTIONS
         ======================= */}
      {feed.map((section) => (
        <Section
          key={section.id}
          title={section.title}
        >
          {section.items.map((item) => (
            <RichCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              price={
                typeof item.price === 'number'
                  ? `${item.price} kr`
                  : item.price
              }
              badge={item.badge}
              confidence={item.confidence}
            />
          ))}
        </Section>
      ))}

      {/* =======================
          SELL ENTRY
         ======================= */}
      <Pressable
        style={styles.sellHint}
        onPress={() => router.push('/(tabs)/sell')}
      >
        <Text style={styles.sellHintText}>
          Vill du sälja något?
        </Text>
      </Pressable>
    </ScrollView>
  );
}

/* ===========================
   STYLES
   =========================== */
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },

  container: {
    paddingBottom: theme.spacing.lg,
  },

  hero: {
    padding: theme.spacing.md,
  },

  kicker: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginBottom: 12,
  },

  karmaCard: {
    borderRadius: theme.radius.xl,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  karmaLabel: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    letterSpacing: 1,
  },

  karmaValue: {
    fontSize: 36,
    fontWeight: '900',
    color: theme.colors.text,
    marginTop: 4,
  },

  karmaMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  karmaActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 12,
    alignItems: 'center',
  },

  primaryText: {
    fontWeight: '900',
    color: '#000',
  },

  secondaryBtn: {
    flex: 1,
    borderRadius: theme.radius.md,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  secondaryText: {
    color: theme.colors.text,
    fontWeight: '700',
  },

  categories: {
    paddingHorizontal: theme.spacing.md,
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
    color: theme.colors.text,
    fontWeight: '600',
  },

  sellHint: {
    marginVertical: 20,
    alignItems: 'center',
  },

  sellHintText: {
    color: theme.colors.muted,
  },
});