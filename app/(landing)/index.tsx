import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function Landing() {
  return (
    <ScrollView style={styles.page}>
      <LinearGradient colors={['#0b0b0f', '#14141b']} style={styles.hero}>
        <Text style={styles.logo}>KARMA</Text>
        <Text style={styles.tagline}>Köp. Sälj. Rädda världen lite.</Text>

        <Pressable
          style={styles.cta}
          onPress={() => router.push('/onboarding')}
        >
          <Text style={styles.ctaText}>Kom igång</Text>
        </Pressable>
      </LinearGradient>

      <View style={styles.cards}>
        <Card title="Sälj smart" text="AI sätter rätt pris direkt" />
        <Card title="Tjäna karma" text="Varje affär räknas" />
        <Card title="Handla bättre" text="Second hand, men premium" />
      </View>
    </ScrollView>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <LinearGradient colors={['#1b1b28', '#0f0f14']} style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0b0b0f' },
  hero: { paddingTop: 120, paddingBottom: 80, alignItems: 'center' },
  logo: { fontSize: 42, fontWeight: '900', color: '#fff' },
  tagline: { color: '#9a9aa0', marginBottom: 32 },
  cta: { backgroundColor: '#7CF3C0', padding: 16, borderRadius: 16 },
  ctaText: { fontWeight: '900', color: '#000' },
  cards: { padding: 16, gap: 16 },
  card: { borderRadius: 22, padding: 20, borderWidth: 1, borderColor: '#2a2a36' },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '800' },
  cardText: { color: '#9a9aa0' },
});