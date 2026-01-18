import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Landing() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#05050a', '#0b0b14', '#05050a']}
        style={styles.hero}
      >
        <Text style={styles.logo}>KARMA</Text>
        <Text style={styles.tagline}>
          Köp. Sälj. Rädda världen lite.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>KARMA SCORE</Text>
          <Text style={styles.cardValue}>1 250</Text>
          <Text style={styles.cardMeta}>Eco-hjälte</Text>

          <Pressable
            style={styles.cta}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.ctaText}>Öppna appen</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.features}>
        <Feature
          title="Sälj smart"
          text="AI sätter rätt pris direkt"
        />
        <Feature
          title="Tjäna karma"
          text="Varje affär räknas"
        />
        <Feature
          title="Trygg handel"
          text="Paket, escrow & skydd"
        />
      </View>
    </ScrollView>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#05050a' },
  container: { paddingBottom: 80 },

  hero: {
    paddingTop: 120,
    paddingHorizontal: 24,
    paddingBottom: 60,
  },

  logo: {
    color: '#fff',
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 2,
  },

  tagline: {
    color: '#9a9aa0',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 40,
  },

  card: {
    backgroundColor: '#101018',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  cardLabel: { color: '#8b8b93', fontSize: 12 },
  cardValue: { color: '#fff', fontSize: 48, fontWeight: '900' },
  cardMeta: { color: '#8b8b93', marginBottom: 16 },

  cta: {
    backgroundColor: '#7CF3C0',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },

  ctaText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 16,
  },

  features: {
    padding: 24,
    gap: 16,
  },

  featureCard: {
    backgroundColor: '#101018',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  featureTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  featureText: {
    color: '#9a9aa0',
    marginTop: 4,
  },
});