import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Landing() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={{ paddingBottom: 60 }}>
      {/* HERO */}
      <LinearGradient
        colors={['#0b0b0f', '#14141b']}
        style={styles.hero}
      >
        <Text style={styles.logo}>KARMA</Text>
        <Text style={styles.tagline}>
          Köp. Sälj. Rädda världen lite.
        </Text>

        <Pressable
          style={styles.cta}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.ctaText}>Öppna appen</Text>
        </Pressable>
      </LinearGradient>

      {/* VALUE CARDS */}
      <View style={styles.cards}>
        <Card
          title="Sälj smart"
          text="AI sätter rätt pris direkt"
        />
        <Card
          title="Tjäna karma"
          text="Varje affär räknas"
        />
        <Card
          title="Handla bättre"
          text="Second hand, men premium"
        />
      </View>

      {/* PREVIEW */}
      <View style={styles.preview}>
        <Text style={styles.previewTitle}>En ny marknadsplats</Text>
        <Text style={styles.previewText}>
          Inspirerad av Spotify, Vinted, Blocket & Tradera — men byggd för framtiden.
        </Text>
      </View>
    </ScrollView>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <LinearGradient
      colors={['#1b1b28', '#0f0f14']}
      style={styles.card}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },

  hero: {
    paddingTop: 120,
    paddingBottom: 80,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  logo: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 2,
    marginBottom: 12,
  },

  tagline: {
    color: '#9a9aa0',
    fontSize: 16,
    marginBottom: 32,
  },

  cta: {
    backgroundColor: '#7CF3C0',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
  },

  ctaText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 16,
  },

  cards: {
    paddingHorizontal: 16,
    gap: 16,
    marginTop: -40,
  },

  card: {
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },

  cardText: {
    color: '#9a9aa0',
  },

  preview: {
    marginTop: 48,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  previewTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 8,
  },

  previewText: {
    color: '#9a9aa0',
    textAlign: 'center',
  },
});