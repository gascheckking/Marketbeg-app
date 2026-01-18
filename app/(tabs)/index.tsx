// app/(tabs)/index.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
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
  useEffect(() => {
    track('home_viewed');
  }, []);

  const feed = useMemo(() => getHomeFeed(), []);

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.kicker}>Välkommen tillbaka</Text>
        <Text style={styles.title}>Karma</Text>
        <Text style={styles.subtitle}>Hitta något nytt idag</Text>

        <LinearGradient
          colors={['#1b1b28', '#0f0f14']}
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

      <View style={styles.featured}>
        <Image source={require('../../assets/arbetsklader.png')} style={styles.featuredImage} />
        <Image source={require('../../assets/skor.png')} style={styles.featuredImage} />
        <Image source={require('../../assets/markesvaskor.png')} style={styles.featuredImage} />
        <Image source={require('../../assets/vintagefynd.png')} style={styles.featuredImage} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {['Kläder', 'Skor', 'Hem', 'Elektronik', 'Barn'].map((c) => (
          <View key={c} style={styles.category}>
            <Text style={styles.categoryText}>{c}</Text>
          </View>
        ))}
      </ScrollView>

      <Section title="Rekommenderat för dig">
        {feed.map((item) => (
          <RichCard
            key={item.id}
            title={item.title}
            price={`${item.price} kr`}
            badge={item.badge}
          />
        ))}
      </Section>

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
  page: { flex: 1, backgroundColor: theme.colors.bg },
  container: { paddingBottom: theme.spacing.lg },
  hero: { padding: theme.spacing.md },
  kicker: { fontSize: theme.text.xs, color: theme.colors.muted },
  title: { fontSize: theme.text.xl, fontWeight: '900', color: theme.colors.text },
  subtitle: { fontSize: theme.text.sm, color: theme.colors.muted, marginBottom: 12 },
  karmaCard: {
    borderRadius: theme.radius.xl,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  karmaLabel: { fontSize: theme.text.xs, color: theme.colors.muted },
  karmaValue: { fontSize: 36, fontWeight: '900', color: theme.colors.text },
  karmaMeta: { fontSize: theme.text.sm, color: theme.colors.muted },
  karmaActions: { flexDirection: 'row', gap: 10, marginTop: 16 },
  primaryBtn: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryText: { fontWeight: '900', color: '#000' },
  secondaryBtn: {
    flex: 1,
    borderRadius: theme.radius.md,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryText: { color: theme.colors.text, fontWeight: '700' },
  featured: { paddingHorizontal: theme.spacing.md, gap: 12, marginBottom: 20 },
  featuredImage: { width: '100%', height: 160, borderRadius: theme.radius.lg },
  categories: { paddingHorizontal: theme.spacing.md, gap: 8 },
  category: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  categoryText: { color: theme.colors.text, fontWeight: '600' },
  sellHint: { marginVertical: 20, alignItems: 'center' },
  sellHintText: { color: theme.colors.muted },
});