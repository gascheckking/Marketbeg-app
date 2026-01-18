import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Landing() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      {/* HERO */}
      <LinearGradient
        colors={['#0b0b0f', '#1a1a2e']}
        style={styles.hero}
      >
        <Text style={styles.logo}>KARMA</Text>
        <Text style={styles.tagline}>Köp. Sälj. Rädda världen lite.</Text>

        <LinearGradient
          colors={['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.02)']}
          style={styles.card}
        >
          <Text style={styles.scoreLabel}>KARMA SCORE</Text>
          <Text style={styles.score}>1 250</Text>
          <Text style={styles.meta}>Eco-hjälte</Text>

          <Pressable
            style={styles.cta}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.ctaText}>Öppna appen</Text>
          </Pressable>
        </LinearGradient>
      </LinearGradient>

      {/* FEATURES */}
      <View style={styles.features}>
        <Feature title="Sälj smart" text="AI sätter rätt pris direkt" />
        <Feature title="Tjäna karma" text="Varje affär räknas" />
        <Feature title="Köp hållbart" text="Second hand med stil" />
      </View>

      {/* FOOTER CTA */}
      <Pressable
        style={styles.bottomCta}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.bottomCtaText}>Starta nu</Text>
      </Pressable>
    </ScrollView>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <LinearGradient
      colors={['#1b1b28', '#0f0f14']}
      style={styles.featureCard}
    >
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureText}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },
  container: {
    paddingBottom: 60,
  },

  hero: {
    padding: 24,
    paddingTop: 80,
  },

  logo: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },

  tagline: {
    textAlign: 'center',
    color: '#9a9aa0',
    marginBottom: 32,
  },

  card: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  scoreLabel: {
    color: '#9a9aa0',
    fontSize: 12,
  },

  score: {
    fontSize: 46,
    fontWeight: '900',
    color: '#fff',
  },

  meta: {
    color: '#9a9aa0',
    marginBottom: 20,
  },

  cta: {
    backgroundColor: '#7CF3C0',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  ctaText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },

  features: {
    paddingHorizontal: 24,
    gap: 16,
    marginTop: 32,
  },

  featureCard: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  featureTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },

  featureText: {
    color: '#9a9aa0',
  },

  bottomCta: {
    marginTop: 40,
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#7CF3C0',
    alignItems: 'center',
  },

  bottomCtaText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000',
  },
});